var express = require('express');
var router = express.Router();
var readFile = require('../offers.json')
/*GET home page. */
router.get('/', function(req, res, next) {

    var concat = '';
    readFile.flightstatus.forEach(function (item) {
        concat += `<h1>Offer id=${item.offerId}</h1>
<h2>CNAME = ${item.cname}</h2>
<h2>PRODUCT = ${item.product}</h2>
<h2>PRICE = ${item.price}</h2>
<h2>CLICK HERE TO AVAIL = ${item.link}</h2>
`;

    })
    res.send(`${concat}`);
});