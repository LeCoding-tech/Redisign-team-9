const express = require('express');
const request = require("request");
const { response } = require('express');
const app = express()
const port = 4000;

// sending HTTP request to port 4000
app.get('/', (req,res) => res.send("Hello World"));

app.get('/example', (req,res) => {
    request('http://www.google.com', function (error, reponse, body) {
        if (!error && response.statusCode == 200) {
            res.send(body) // Printing google webpage
        }
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))

