const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./router/page'))
app.listen(3000)