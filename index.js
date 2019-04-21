const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('A test!');
});

app.listen(process.env.PORT || 3000, () => console.log('Gator app listening on port 3000!'));

