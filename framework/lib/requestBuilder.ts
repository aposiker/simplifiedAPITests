import { JsonRequest } from 'http-req-builder'
import { allure } from 'allure-mocha/dist/MochaAllureReporter'
import { CONFIG } from '../../config/env'

const indentInSpaces = 2

export class BuildRequest extends JsonRequest {
  schemaPath: string
  service: string
  constructor(schemaPath: string) {
    super()
    this.schemaPath = CONFIG.BASE_URL + '/' + schemaPath
    this.options = {
      ...this.options,
      hooks: {
        afterResponse: [
          response => {
            const stepName = `[${response.statusCode}] ${
              this?.options?.method ?? 'GET'
            } hiddenUrl`

            const step = allure.createStep(stepName, () => {
              if (this?.options?.json) {
                allure.createAttachment(
                  'JSON REQUEST BODY',
                  JSON.stringify({ body: 'example' }, null, indentInSpaces),
                  'application/json' as any
                )
              }
              allure.createAttachment(
                'JSON REQUEST HEADERS',
                JSON.stringify({ headers: 'example' }, null, indentInSpaces),
                'application/json' as any
              )
              if (response?.body) {
                allure.createAttachment(
                  'JSON RESPONSE BODY',
                  JSON.stringify({ body: 'example' }, null, indentInSpaces),
                  'application/json' as any
                )
              }
            })

            step()
            return response
          }
        ]
      }
    }
  }

  public stringBody(body: string): this {
    this.options.body = body
    return this
  }
}
