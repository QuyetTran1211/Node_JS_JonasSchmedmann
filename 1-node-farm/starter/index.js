const fs = require('fs');
// const { text } = require('stream/consumers');
const url = require('url');
// const { Http2ServerRequest } = require('http2');
const http = require('http');

///----------------------------------------
//  Files

// -----------------Blocking synchronousway -----
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textIn);
// // const hello = 'Hello World';
// // console.log(hello);

// const textOut = `This is what we know about avocado: ${textIn}\n Created on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOut);

// console.log('File written');

// ------- Non-blocking asynchronous way

// fs.readFile('./txt/start.txt','utf-8', (err, data) => {
//    console.log(data);
// });

// SEVER
const server = http.createServer((req, res ) => {
   console.log(req.url)

   const pathName =  req.url;

   if(pathName === '/' || pathName === '/overview') {
      res.end('this is OverView');
   } else if (pathName === '/product'){
      res.end('this is the Product');
   }else if(pathName === '/api'){
      
      fs.readFile(`${__dirname}/dev-data/data.json` , 'utf-8' , (err , data) => {
         const productData = JSON.parse(data);
         // console.log(productData);
         res.writeHead(200, { 
            'Content-type': 'application/json'
         })
         res.end(data);
      });

   }else {
      res.writeHead(404 ,{
         'Content-type': 'text/html',
         'my-own-header': 'hello-world'
      })
      res.end('<h1>Page not found!!</h1>');
   }
});

server.listen(8000, '127.0.0.1', () => {
   console.log('Listening to reqest on port 8000')
});


