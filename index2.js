//llamamos el modulo http
const http = require('http');
//Establecemos la url o IP de nuestro servidor
const hostname = '192.168.50.180';
//establecemos el puerto de escuca
const port = 3000;
//creamos una instancia HTTP con reques y un response
const server = http.createServer((req, res) => {
    //el servidor respondera un codigo 200
    res.statusCode = 200;
    //el servidor respondera con un texto plano
    res.setHeader('Content-Type', 'text/html');
    //El servidor respondera el mensaje hola mundo
res.end('<h1>Hola Mundo</h1>');
});

server.listen(port, hostname, () => {
    console.log(`El servior se esta ejecutando en http://${hostname}:${port}/`);
});
