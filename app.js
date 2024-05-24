const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello! from the Camp!');
});

app.listen(3001, () => {
    console.log('serving on port 3001');
});
