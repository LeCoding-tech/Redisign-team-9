const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
var router = require('./src/Components/Routes/apiProducts')

app.use(express.json());
app.use(cors())

app.use("/api")

const port = process.env.SERVER || 3007;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})