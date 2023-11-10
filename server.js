const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery',false); 
var routes = require('./route/routes');
const cors = require('cors');

app.use(cors(
    {
        origin:"http://localhost:4200"
    }
))

app.listen(9992,function check(err)
{
    if(err)
    console.log("error");
    else
    console.log("started");
});

mongoose.connect("mongodb://localhost:27017/flashfoods",{useNewUrlParser: true, useUnifiedTopology: true},
function checkDb(error)
{
    if(error)
    {
        console.log("error connecting to DB");
    }
    else
    {
        console.log("successfully connected to DB");
    }
});
app.use(express.json());
app.use(routes);