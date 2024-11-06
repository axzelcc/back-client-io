const io = require('socket.io-client');

const username = 'axzelcc';
const password = '123';

const basicAuth = `Basic ${Buffer.from(username + ':' + password).toString('base64')}`;

const socket = io('http://localhost:3000', {
  extraHeaders: {
    'Authorization': basicAuth
  }
});

socket.on('Mensaje', (data) => {
  console.log('Mensaje recibido:', data);
});

function sendMessage() {
  const message = {
    content: 'Bien estamo activo', 
    userId: 1, 
  };
  socket.emit('mensaje', message );
}

sendMessage();
