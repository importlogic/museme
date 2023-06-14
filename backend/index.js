const Express = require('express');

require('dotenv').config();

const app = new Express();

app.use(Express.json());

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain);

const PORT = process.env.PORT || 3000;

const accountRoutes = require('./routes/account.js')
app.use(accountRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send({
        status: 'success',
        message: 'Welcome to Museme backend! You probably landed here accidentally. Check out website at https://museme.pages.dev',
    });
});
