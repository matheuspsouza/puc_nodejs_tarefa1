// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 5000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('MATHEUS PATROCINIO SOUZA');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('MATHEUS PATROCINIO SOUZA');
})

const port  = process.env.PORT || '5000';

app.listen(port, () => console.log(`Server started on PORT ${port}`));
