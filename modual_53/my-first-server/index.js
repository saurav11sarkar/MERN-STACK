const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req, res)=>{
    res.send('Hello my past aver server blo hllow blo');
})
app.get('/data',(req, res)=>{
    res.send('More data so on hello bey');
})

app.listen(port,()=>{
    console.log(`My first sever is running on port: ${port}`)
})