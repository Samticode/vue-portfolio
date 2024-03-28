express = require('express');
app = express();

app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

// Z4xylO3Kgtj9DvGOytVYFCtef7jShAUpZrMT1tHG8iXd4kuh7Y2uWd8tzx7i