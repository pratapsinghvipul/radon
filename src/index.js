const express = require('express');
var bodyParser = require('body-parser');

const {default:mongoose} = require('mongoose')

const route = require('./routes/route.js');

const app = express();


mongoose.connect("mongodb+srv://pratapsinghvipul:kv6QnjKhdD6RQWLu@cluster0.4vaasvq.mongodb.net/vipul007", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});