var express = require('express');
var router = express.Router();
var readFile = require('../contacts.json')
router.get('/names', function (req, res) {
    var con = '';
    readFile.contact.forEach(function (item) {
        con += `<h1>${item.nm}</h1>
               <img src="/images/${item.id}.jpg"/>
              <h2>${item.cty}</h2>
              <h3>${item.hse}</h3> 
              <h4>${item.yrs}</h4>
        <script> src="/reload/reload.js"</script>`;
    })

    res.send(`${con}`);
});

router.get('/names/:nm', function (req, res) {
    var name = readFile.contact[req.params.nm];
    res.send(`<h1>${name.nm}</h1>
              <img src="/images/${name.id}.jpg"/>
              <h2>${name.cty}</h2>
              <h3>${name.hse}</h3> 
    <script> src="/reload/reload.js"</script>
    `);
});

router.get('/names/:id', function (req, res) {
    var name = readFile.contact[req.params.id];
    res.send(`<h1>${name.nm}</h1>
              <img src="/images/${name.id}.jpg"/>
              <h2>${name.cty}</h2>
              <h3>${name.hse}</h3> 
    <script> src="/reload/reload.js"</script>
    `);
});

router.post('/enter', function(req, res) {
    feedbackData.unshift(req.body);
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
        if (err) {
            console.log(err);
        }
    });
    res.json(feedbackData);
});
module.exports = router;
