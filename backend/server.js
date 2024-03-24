express = require('express');
app = express();

app.get('/', async (req, res) => {
    try {
        const response = await fetch('https://api.sportmonks.com/v3/core/continents?api_token={{api_token}}&include=countries');
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error(error);
    }

});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

// Z4xylO3Kgtj9DvGOytVYFCtef7jShAUpZrMT1tHG8iXd4kuh7Y2uWd8tzx7i