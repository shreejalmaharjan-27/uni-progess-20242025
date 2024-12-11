let mongoose = require('mongoose')
const MONG_URI = 'mongodb://shree:kitsune123@172.20.0.16:27017/wk10'
mongoose.connect(MONG_URI, {
    useUnifiedTopology: true,
    authSource: 'admin'
})
const db = mongoose.connection;
db.on('error', function (err) {
    console.log('Error occured' + err)
})
db.once('connected', function () {
    console.log('connection is successful to' + MONG_URI)
})
module.exports = db