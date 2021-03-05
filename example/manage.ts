// import { execute } from 'django/core/management'
import { execute } from '../lib/core/management'
import settings from './config/settings'

function main(): void {
  execute(settings)
}

main()
