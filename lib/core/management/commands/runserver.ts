import { BaseCommand } from '../base'
import servers from '../../servers'
import { RunserverCommandOptions } from '../../../types'

class RunserverCommand extends BaseCommand {
  host = '127.0.0.1'
  port = 8000

  execute(this: RunserverCommand, options?: RunserverCommandOptions) {
    if (options) {
      if (options.host) {
        this.host = options.host
      }
      if (options.port) {
        this.port = options.port
      }
    }
    this.run(options)
  }

  run(this: RunserverCommand, options?: RunserverCommandOptions) {
    try {
      servers.run(this.host, this.port)
    } catch (error) {
      console.log(error)
      process.exit()
    }
  }
}

export default { RunserverCommand }
export { RunserverCommand }
