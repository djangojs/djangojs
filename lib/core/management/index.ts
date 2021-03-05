import { Settings } from '../../types'
import { RunserverCommand } from './commands/runserver'

function execute(settings: Settings) {
  new RunserverCommand().execute()
}

export default { execute }
export { execute }
