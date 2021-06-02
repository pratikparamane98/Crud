const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/Aliens.js');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use('/aliens',usersRoutes);

app.get('/',(req,res)=>{
    console.log("Refresh Index Page");
    res.send("every is connected");
})

app.listen(PORT,() =>{
    // console.log(`server running on port:http://localhost//${PORT}`)
    console.log(+PORT);
})


// const db = 'mongodb+srv://pratikparamane98:pratikparamane98@cluster0.4aala.mongodb.net/myFirstDb?retryWrites=true&w=majority';
const db = 'mongodb://localhost/AlienDBex';

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successfull");
}).catch(()=>{
    console.log("not successfulll")
})
 