// websocket-client.js
const io = require('socket.io-client');

// Definir tus credenciales de autenticación básica
const username = 'axzelcc';
const password = '123';

// Codificar las credenciales en base64
const basicAuth = `Basic ${Buffer.from(username + ':' + password).toString('base64')}`;

// Conectar al servidor WebSocket con autenticación básica
const socket = io('http://localhost:3000', {
  extraHeaders: {
    'Authorization': basicAuth // Pasar las credenciales en el encabezado
  }
});

// Escuchar eventos del servidor (por ejemplo, para recibir un mensaje)
socket.on('Mensaje', (data) => {
  console.log('Mensaje recibido:', data);
});

// Enviar un mensaje al servidor WebSocket
function sendMessage() {
  const message = {
    content: 'Bien estamo activo', // El contenido del mensaje
    userId: 1, // El ID del usuario que envía el mensaje
  };
  socket.emit('mensaje', message );
}

// Llamar a la función para enviar un mensaje
sendMessage();

// Desconectar cuando ya no sea necesario
//socket.disconnect();
