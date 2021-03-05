import version from '../../utils/version'

class BaseCommand {
  help = ''
  stdout: NodeJS.WriteStream = process.stdout
  stderr: NodeJS.WriteStream = process.stderr

  constructor(stdout?: NodeJS.WriteStream, stderr?: NodeJS.WriteStream) {
    if (stdout) {
      this.stdout = stdout
    }
    if (stderr) {
      this.stderr = stderr
    }
  }

  getVersion(): string {
    return version.getVersion()
  }

  printHelp(): void {

  }

  execute(): void {
    throw new Error('Must Be Implemented')
  }

  check() {

  }
}

export default { BaseCommand }
export { BaseCommand }
