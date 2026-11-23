console.log("Hello Devops")
console.log("Salman Ahmad")
// const http = require('http'); http.createServer((req, res) => {if (req.url  === '/')
//     res.end('Hello'); else res.writeHead(404).end();
// }).listen(3000);
const express = require('express'); const app = express(); 
app.use(express.json()); app.use('/api/users', (req,res)=>{
    res.end('users');
}); 
app.use(express.json()); app.use('/api/products', (req,res)=>{
    res.end('products');
}); 
app.use(express.json()); app.use('/api/order', (req,res)=>{
    res.end('order');
}); 
app.listen(5000)
