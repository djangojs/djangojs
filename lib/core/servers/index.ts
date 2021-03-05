import net from 'net'

function run(host: string, port: number) {
  net.createServer((conn) => {
    conn.on('data', (reqBuffer) => {
      conn.write('HTTP/1.1 200 OK\r\n')
      conn.write('Content-Type: text/plain\r\n')
      conn.end()
    })
  }).listen(port, host, () => {
    console.log(`Server is running at PORT ${port}...`)
  })
}

export default { run }
export { run }
