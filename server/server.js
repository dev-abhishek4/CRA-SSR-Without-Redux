import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

// to load each page
import loader from './loader.js';

// get environment variables
dotenv.config();
const PORT = process.env.SERVER_PORT || 4000;

// Create our express app
const app = express();

// set middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/testApi', (req, res) => {
    console.log('Api called');
    res.header("Access-Control-Allow-Origin", "*");
    res.send({
        message: 'api call successful'
    })
})

// when requested, guide where to look for project and load it using loader
app.use(express.Router().get('/', loader));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(loader);

app.listen(PORT, console.log(`App listening on port ${PORT}!`));