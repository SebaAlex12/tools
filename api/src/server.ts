// const http = require('http');
// const express = require('express');
import express,{ Application, Request, Response } from "express";
import cors from "cors";


/* routes  */
import infoRoutes from "./routes/infos";
import toolsRoutes from './tmp/tools';

const app:Application = express();

app.use(cors());
app.use(infoRoutes);
app.use(toolsRoutes);

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>hello</h1>');
//     res.end();
// });

app.get('/test',(req:Request, res:Response) => {
    // res.send(JSON.stringify({message:'server mext message 123 ...'}));
    
});

// app.post('/list/infos',(req:Request,res:Response) => {
//     res.send(JSON.stringify({message:'infos list'}));
// });

app.get('/',(req:Request, res:Response) => {
    console.log('main path');
    res.send(JSON.stringify({ text: 'testing 23...'}));
});

const port:number = 5000;

app.listen(port, () => {
    console.log(`Node server is running on port ${port}`);
});