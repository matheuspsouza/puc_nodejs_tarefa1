
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('MATHEUS PATROCINIO SOUZA');
})

const port  = process.env.PORT || '5000';

app.listen(port, () => console.log(`Server started on PORT ${port}`));
