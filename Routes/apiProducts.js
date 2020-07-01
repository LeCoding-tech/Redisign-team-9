const router = require('express').Router();
const mysql = require('mysql')
require('dotenv').config()

// Database info
let connection = mysql.createConnection({
    host: 'localhost',
    port:3306,

    user:'root',

    password: 'Lee@nge1o',
    database: 'samsungRedesign_db'

})

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Leo");
//   });

// Testing connect to query
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });

  let sql = 'SELECT HomeAppliancesPrices.homeAppliancePrice, HomeAppliances.URL FROM HomeAppliances INNER JOIN HomeAppliancesPrices ON HomeAppliances.homeAppliance_id = HomeAppliancesPrices.homeAppliance_id INNER JOIN HomeAppliancesDescriptions ON HomeAppliances.homeAppliance_id = HomeAppliancesDescriptions.homeAppliance_id;'

  // Getting info from MySQL database 
router.get('/HomeApplicancesCard', (req,res) => {
    connection.query('SELECT HomeAppliancesPrices.homeAppliancePrice, HomeAppliances.URL FROM HomeAppliances INNER JOIN HomeAppliancesPrices ON HomeAppliances.homeAppliance_id = HomeAppliancesPrices.homeAppliance_id INNER JOIN HomeAppliancesDescriptions ON HomeAppliances.homeAppliance_id = HomeAppliancesDescriptions.homeAppliance_id;'
    , function (err, data){
        if(err) {
            throw err
        }

        res.send(data)
        console.log(data)
        console.log(err)
    })
})

module.exports = router