const express=require('express');
const app=express();

app.get('/', (req, res)=>{
    res.send('<h1>This is / route</h1>')
});
app.get('/about', (req, res)=>{
    res.send('<h1>This is /about route</h1>')
});

 
app.listen(3000,()=>{
    console.log("server running ");
});