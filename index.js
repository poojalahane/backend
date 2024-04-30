require('dotenv').config()
const express = require('express');

const app = express()
const port = 3000;

app.get('/', (req, res)=>{
  res.send('Hello World')
})

app.get('/twitter', (req, res)=>{
  res.send('pujalahane.com')
})

app.get('/login', (req, res)=>{
  res.send('<h1> Please login at chai aur code </h1>')
})

app.get('/youtube', (req, res)=>{
  res.send("This is a youtube")
})

app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on port : ${process.env.PORT}`);
})