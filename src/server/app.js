import express from 'express'
import indexRouter from './routes/indexRouter'
import mobileRouter from './routes/mobileRouter'
import evolutionRouter from './routes/evolutionRouter';

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.use('/', indexRouter);
app.use('/mobile', mobileRouter);
app.use('/evolution', evolutionRouter);
  
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
