const express = require('express');
var bodyParser = require('body-parser');
const {default:mongoose} = require('mongoose')

const route = require('./routes/route.js');

const app = express()
mongoose.connect("mongodb+srv://pratapsinghvipul:aGq98X3ue7m4sPSI@cluster0.4vaasvq.mongodb.net/vipul007-db?retryWrites=true&w=majority",{
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
