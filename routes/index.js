var express = require('express');
var router = express.Router();
var readFile = require('../flight.json')
/*GET home page. */
router.get('/', function(req, res, next) {

    var con = '';
    readFile.flightstatus.forEach(function (item) {
        con += `<h1>FLight id=${item.flightId}</h1>
<h2>FS = ${item.fs1}</h2>
<h2>IATA = ${item.iata}</h2>
<h2>ICAO = ${item.icao}</h2>
<h2>NAME = ${item.name}</h2>
`;

    })
    res.send(`${con}`);
});

//After authentication this route will be open to the officer in incharge
router.post('/addFlights', function(req, res) {
  readFile	.unshift(req.body);
  fs.writeFile('app/data/flight.json', JSON.stringify(readFile), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(readFile);
});
/*  Function to parse ajax 
$(function() {
    $.getJSON('flight', addFlights);

    $('.show-flight').submit(function(e) {
        e.preventDefault();
        $.post('feedback', {
            flightname: $('#form-name').val(),
            iata: $('#form-iata').val(),
            icao: $('#form-icao').val()
            name: $('#form-icao').val()
            fs: $('#form-fs').val()

        }, addFlights);
    });
*/

 /*function addflight(data) {
        var output = '';
        $.each(data,function(key, item) {
            output += ` HERE THE HTML OUTPUT TO BE THROWN IS GENERATED  `
        $('.show-Flight').html(output);
    }
});
*/

$('.show-Flight').on('click', function(e) {
      if (e.target.className == 'HTML TO PUT A CROSS BUTTON HERE') {
        $.ajax({
          url: '/' + e.target.flightId,
          type: 'DELETE',
          success: addflight
        }); //ajax
      } // the target is a delete button
  }); 

router.get('/feedback',function(req,res)
{
    res.render('feedback',{})
});

module.exports = router;