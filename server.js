require('dotenv').config()

const http = require('http')
const app = require('./app')
const port = process.env.PORT || 8000
const domainname = process.env.DOMAINNAME
const connection = require('./src/config/connectDB')


// const { DateTime } = require('luxon');

// function getCurrentDateTime() {
//     const vietnamTime = DateTime.now().setZone('Asia/Ho_Chi_Minh')
//     return vietnamTime.toFormat('yyyy-MM-dd HH:mm:ss')
// }
// console.log(getCurrentDateTime())

const server = http.createServer(app)


server.listen(port, 'localhost')

