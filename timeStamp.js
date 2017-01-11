var express = require('express');


    var app = express();
    
    app.use(function(req, res) {
        var url = decodeURI(req.url.slice(1));
        
    var dateUrl, dateString, unixTime;

    if (/[a-zA-Z]/.test(url)) {
        dateUrl = new Date(url);

        dateString = dateUrl.toDateString();
    }
    else {
        dateUrl = new Date().setSeconds(url);

        dateString = new Date(dateUrl).toDateString();
    }

        unixTime = Date.parse(dateString);

        res.end(JSON.stringify({"natural": dateString, "unix": unixTime}));
    });

    app.listen(8080);

