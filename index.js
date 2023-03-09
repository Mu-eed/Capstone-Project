const express = require('express');

const path = require('path');

const cors = require('cors');

const route = require('./controller');

const port = parseInt(process.env.PORT) || 4000;

const db = require('./config');

const bodyParser = require('body-parser');

const app = express();

const jwt = require('jsonwebtoken');

const { errorHandling} = require('./middleware/ErrorHandling');

const cookieParser = require('cookie-parser');


app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});
app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended: false})
)

route.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './view/index.html'));
})

app.listen(port, ()=>{
    console.log(`Server is running...`)
});

app.use(errorHandling);