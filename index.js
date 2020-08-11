const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router')
const Config = require('./config')
const PORT = process.env.PORT || Config.portWebMain;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}));
app.use(morgan('dev'));
app.use('/api', router);

try {
    // init server
    app.listen(PORT, function () {
        console.log(`Server listen in PORT: ${PORT}`);
    });
} catch (e) {
    console.log(e)
}
