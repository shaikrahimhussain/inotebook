const connectToMongoose = require('./db');
const express = require('express');
const app = express();
const PORT = 3000

app.use(express.json());
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(PORT,()=>{
    console.log(`iNoteBook app listening at http://localhost:${PORT}`)
})
connectToMongoose();