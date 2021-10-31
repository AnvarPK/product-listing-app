const express = require('express');
require('./db');
const CategoryRouter = require('./routers/category');

const port = 3001;
const app = express();

// Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(express.json());

app.use(CategoryRouter);


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});




