const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.set('port',process.eventNames.PORT || 3000)

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
});