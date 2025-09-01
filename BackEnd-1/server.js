


const express = require('express');
const app = express(); 

//iska kaam h----------- used to parse request.body in express -> PUT or POST
const bodyParser = require('body-parser');

//iska kaam h ------------specifically parse JSON data & add it to request.Body Object 
app.use(bodyParser.json());



app.listen(8000, () => {
     console.log("Server Started at port no.8000")
});


app.get('/' , (request, response) => {
    response.send("Hello Jee ,kaise ho ");
})

app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car SUbmitted Successfully.")
})

//   Mongoose -->> to connect Database with express
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser : true,
    useUnifiedTopology:true
})
.then( ()=> {console.log("Connection Successful ")})
.catch( (error )=> {console.log("Received an error")});