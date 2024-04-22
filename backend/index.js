const connectToMongoose = require('./db');

const express = require('express');
const app = express();
const PORT = 3000

app.get('/',(req,res)=>{
    res.send('Hello Rahim')
})

app.listen(PORT,()=>{
    console.log(`iNoteBook app listening at http://localhost:${PORT}`)
})
connectToMongoose();