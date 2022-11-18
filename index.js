import { Server } from 'socket.io'

const io = new Server({
  cors: {
    origin: 'http://localhost:3000'
  }
})

const dataNotiTest = {
  success: true,
  result: {
    data: [
      {
        id: 1,
        userName: 'Andy',
        content: 'Noti 1'
      },
      {
        id: 355,
        userName: 'Lionel',
        content: 'Noti 2'
      }
    ]
  }
}

io.on('connection', (socket) => {
  console.log('someone has connected')

  socket.on('hello', (arg) => {
    console.log(arg) // world
  })
  socket.emit('notifications', dataNotiTest)
  socket.emit('user_notifications', dataNotiTest)

  console.log('socket',socket.handshake.query.id)

  socket.on('disconnect', () => {
    console.log('someone has left')
  })
})

io.listen(8080)
