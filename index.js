const express = require('express');

const app = express();
app.use(express.json());

const routes = require('./router');
app.use('/api', routes)


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});