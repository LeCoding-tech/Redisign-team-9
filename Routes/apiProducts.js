const router = require('express').Router();
const mysql = require('mysql')
require('dotenv').config()

let connection = mysql.createConnection({
    host: 'localhost',
    port:3306,

    user:'root',

    password: 'Lee@nge1o',
    database: 'LeoDatabase'

})

router.get('/products', (req,res) => {
    connection.query('SELECT Home.home_name, HomeAppliancesPrices.homeAppliancePrice, HomeAppliances.URL INNER JOIN HomeAppliancesPrices ON HomeAppliances.homeAppliance_id = HomeAppliancesPrices.homeAppliance_id;', function (err, data){
        if(err) {
            throw err
        }

        res.send(data)
        console.log(err)
    })
})

module.exports = router