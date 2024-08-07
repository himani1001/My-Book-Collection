import express, { response } from "express";
import{ PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/tbrModels.js';
import { BookRead } from "./models/readModels.js";
import booksRoutes from './routes/booksRoutes.js'
import readBooksRoutes from "./routes/readBooksRoutes.js";
import crRoutes from "./routes/crRoutes.js"
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling cors policy
//Option 1: Allow all origins with default of cors(*)
app.use(cors());
//options 2: ALlow custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/tbr', (request, response) =>{                //get is http method that used for getting resource from server
    console.log(request)
    return response.status(236).send('Welcome to my TBR Books');    //http route
}); 


app.get('/read', (request, response) =>{                //get is http method that used for getting resource from server
    console.log(request)
    return response.status(236).send('Welcome to my Read Books');    //http route
});


app.get('/cr', (request, response) =>{                //get is http method that used for getting resource from server
    console.log(request)
    return response.status(236).send('Welcome to my Read Books');    //http route
});  

app.use('/books', booksRoutes);

app.use('/readBooks', readBooksRoutes);

app.use('/current', crRoutes);


mongoose
    .connect(mongoDBURL)
    .then(() => {                                   //cache structure to handle failure and success
        console.log('App connected to database');
        app.listen(PORT, () => {                            //function to listen to PORT and use our PORT in it, pass a callback function to app.listen
            console.log(`App is listening to PORT: ${PORT}`);
        });
    })
    .catch((error) =>{
        console.log(error);
    })