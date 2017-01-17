var express = require('express');
var router = express.Router();

router.get('/',function(req,res)
{

    res.send(`<link rel="stylesheet" href="/stylesheets/bootstrap.css"/>
              <h1>This is d contact book bro update</h1>
             
             <img src="/images/1.jpg"/>
             <script> src="/reload/reload.js"</script>

`)
})
module.exports = router;
