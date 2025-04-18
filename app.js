const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRoute');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
