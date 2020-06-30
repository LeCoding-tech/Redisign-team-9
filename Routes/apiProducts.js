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

router.get('/Routes/apiProducts.js', (req,res) => {
    connection.query('SELECT Home.home_name, HomeAppliancesPrices.homeAppliancePrice, HomeAppliances.URL INNER JOIN HomeAppliancesPrices ON HomeAppliances.homeAppliance_id = HomeAppliancesPrices.homeAppliance_id INNER JOIN HomeAppliancesDescriptions ON HomeAppliances.homeAppliance_id = HomeAppliancesDescriptions.homeAppliance_id; ', function (err, data){
        if(err) {
            throw err
        }

        res.send(data)
        console.log(err)
    })
})

module.exports = router