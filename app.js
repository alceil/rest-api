const express = require('express');
const  mongoose  = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');
app.use(cors());
app.use(bodyParser.json())
app.use('/posts',postsRoute)
app.get('/',(req,res)=>{
    res.send("We are  on home")
});


mongoose.connect('mongodb+srv://kindi:ilmvm123@cluster0.zeniu.mongodb.net/Cluster0?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true },()=>console.log('Connected to db'));

app.listen(3000);