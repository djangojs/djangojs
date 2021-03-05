interface Settings {
  PORT?: number
}

interface CommandOptions {
  name?: string
}

interface RunserverCommandOptions extends CommandOptions {
  host?: string
  port?: number
}

export { Settings, CommandOptions, RunserverCommandOptions }
