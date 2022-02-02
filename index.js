const express = require('express');
const app = express();
const port =5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://psyche2823:aaaaaaaa1234!@test.drs15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true

}).then(()=>console.log("mongodb is connected...")).catch(err=> console.log("dberror"))

app.listen(port , ()=> console.log(`example app listening on port ${port}`))
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

