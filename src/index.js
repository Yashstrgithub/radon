const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes/route')
const mongoose = require('mongoose')
const app = express()


app.use(bodyParser.json())


mongoose.connect("mongodb+srv://functionup-cohort:Cy1gBvGK84qPiPyJ@cluster0.sngd6.mongodb.net/BookManagement",
    { useNewUrlParser: true })
    
.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))

app.use('/', route)

app.listen(process.env.port || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})
