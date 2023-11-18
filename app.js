const express = require('express')

//const routes = require('./src/routes')
const path = require('path');
const app = express()
const routes = require('./src/routes')

const staticPath = path.join(__dirname, 'public');

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.get('/', (req, res) => {
    res.send("Hello from sever!!!")
})

app.use('/api/auth', routes.auth)
app.use('/api/user', routes.user)

app.use(express.static(staticPath));

module.exports = app