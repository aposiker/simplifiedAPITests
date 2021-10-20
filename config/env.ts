import { cleanEnv, url } from 'envalid'

export const CONFIG = cleanEnv(process.env, {
  BASE_URL: url({
    default: 'https://petstore.swagger.io/v2',
    desc: 'API URL to be tested'
  }),

  SWAGGER_URL: url({
    default: 'https://petstore.swagger.io/v2/swagger.json',
    desc: 'Url to openapi documentation'
  })
})
