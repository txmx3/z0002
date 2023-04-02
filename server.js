let express = require('express')
let path = require('path')
let SocketIO = require('socket.io')
let qrcode = require('qrcode')
let fetch = require('node-fetch')
let fs = require('fs')

function connect(conn, PORT) {
    let app = global.app = express()

    //app.use(express.static(path.join(__dirname, 'views')))
    let _qr = 'invalid'

    conn.ev.on('connection.update', function appQR({ qr }) {
        if (qr) _qr = qr
    })

    app.use(async (req, res) => {
        if (fs.existsSync('session.data.json')) {
            // Display HTML code if session.data.json file exists
            res.setHeader('content-type', 'text/html')
            res.end(`
              <html>
  <head>
    <style>
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      video {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    </style>
  </head>
  <body>
    <video src="https://ytdl.tiodevhost.my.id/zecnwqXe850.mp4?filter=audioandvideo&quality=highestvideo&contenttype=video/mp4" loop controls playsinline webkit-playsinline>
      <source src="https://ytdl.tiodevhost.my.id/zecnwqXe850.mp4?filter=audioandvideo&quality=highestvideo&contenttype=video/mp4" type="video/mp4">
    </video>
  </body>
</html>
`)
        } else {
            // Display QR code if session.data.json file does not exist
            res.setHeader('content-type', 'image/png')
            res.end(await qrcode.toBuffer(_qr))
        }
    })

    let server = app.listen(PORT, () => {
      console.log('Aplikasi berjalan di port', PORT)
      if (opts['keepalive']) keepAlive()
    })

    let io = SocketIO(server)
    io.on('connection', socket => {
        let { unpipeEmit } = pipeEmit(conn, socket, 'conn-')
        socket.on('disconnect', unpipeEmit)
    })
}

function pipeEmit(event, event2, prefix = '') {
    let old = event.emit
    event.emit = function (event, ...args) {
        old.emit(event, ...args)
        event2.emit(prefix + event, ...args)
    }
    return {
        unpipeEmit() {
            event.emit = old
        }
    }
}

function keepAlive() {
  const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
  if (/(\/\/|\.)undefined\./.test(url)) return
  setInterval(()=> {
    fetch(url).catch(console.error)
  }, 5 * 1000 * 60)
}

