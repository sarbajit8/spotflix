require('dotenv').config();

const express = require('express');
const cors = require("cors");

const app = express();


const connectDb = require("./utils/db")
//routers
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const serviceRoute = require('./router/service-router');
const adminRoute = require('./router/admin-router')
//error middleware
const errorMiddleware = require('./middlewares/err-middleware');



// let's takkel cors

const corsOptions = {

    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,

}; 


app.use(cors(corsOptions));

//end cors




app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//let's define users
app.use("/api/admin", adminRoute);



//error handling
app.use(errorMiddleware);



const PORT = 5000;

connectDb().then(()=>{

app.listen(PORT, () =>{ 
    console.log(`Example app listening on port ${PORT}!`);
});
});