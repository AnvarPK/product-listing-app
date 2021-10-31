const express = require('express');
require('./db');
const CategoryRouter = require('./routers/category');

const port = 3000;
const app = express();
app.use(express.json());

app.use(CategoryRouter);


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});




