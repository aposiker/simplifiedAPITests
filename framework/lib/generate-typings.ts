import { execSync } from 'child_process'

execSync(
  'npx openapi-typescript https://petstore.swagger.io/v2/swagger.json --output ./.types/types.ts',
  { stdio: 'inherit' }
)
