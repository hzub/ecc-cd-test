const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('A test!');
});

app.listen(80, () => console.log('Gator app listening on port 3000!'));

