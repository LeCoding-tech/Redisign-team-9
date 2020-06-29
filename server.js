const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
var router = require('./Routes/apiProducts')

app.use(express.json());
app.use(cors())

app.use("/api")

const port = process.env.SERVER || 3006;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})