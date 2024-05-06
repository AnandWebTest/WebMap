// import
const express = require('express');
const cors = require('cors');
// initialize
const app = express();
const userRouter = require('./routers/useRouter');
const sitemapRouter = require('./routers/sitemapRouter');
const UtilRouter = require('./routers/utilRouter');

// middleware
app.use(cors({
    origin: ['http://localhost:3000']
}));
app.use(express.json());
app.use('/user', userRouter);
app.use('/sitemap', sitemapRouter);
app.use('/util', UtilRouter);

app.use(express.static('./static/uploads'));
app.use('/load-sitemap',express.static('./output'));

const port = 5000;

app.get('/', (req, res) => {
    res.send('response from express');
});

app.listen( port, () => { console.log('express server open')});