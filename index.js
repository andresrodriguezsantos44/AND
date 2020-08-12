const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router')
const Config = require('./config')
const PORT = process.env.PORT || Config.portWebMain;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}));
app.use(morgan('dev'));
app.use('/api', router);


try {
    app.listen(PORT, function () {
        console.log(`Server listen in PORT: ${PORT}`);
    });
} catch (e) {
    console.log(e)
}
