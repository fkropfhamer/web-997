import express from 'express'

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.get('/', (req, res) => {
    res.render('index');
});
  
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
