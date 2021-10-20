/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { allure } from 'allure-mocha/dist/MochaAllureReporter'
const indentInSpaces = 2

export function AllureStep(message: string) {
  return (target: Object, property: string, descriptor: PropertyDescriptor) => {
    const originalFunction = descriptor.value
    descriptor.value = function (...args: any[]) {
      return allure.step(message, async () => {
        allure.createAttachment(
          `${message} ARGUMENTS`,
          JSON.stringify({ arguments: 'example' }, null, indentInSpaces),
          'application/json' as any
        )
        const result = await originalFunction.apply(this, args)
        if (result) {
          allure.createAttachment(
            `${message} RESULT`,
            JSON.stringify({ result: 'example' }, null, indentInSpaces),
            'application/json' as any
          )
        }

        return result
      })
    }
    return descriptor
  }
}
