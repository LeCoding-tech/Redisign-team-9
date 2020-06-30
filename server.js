const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
let router = require('./Routes/apiProducts')

app.use(express.json());
app.use(cors())


const port = process.env.SERVER || 3006;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.use('/api', router)