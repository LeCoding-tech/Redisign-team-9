const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
let router = require('./apiProducts')

app.use(express.json());
app.use(cors())

app.get("/HomeApplicancesCard", (req, res) => {
    if (!router) res.status(404).send(`Error`);

    res.send(router);
  });

const port = process.env.SERVER || 3006;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.use('/api', router)