const db = require("../database")
let Tips = db.Tips

//write your code here 

let readData = (cb) => {
    Tips.find({}, (err, data) => {
        if (err) {
            cb(err)
        } else {
            cb(data)
        }
    })
}

let addTips = (doner, cb) => {
    Tips.create(doner, (err, data) => {

        if (err) {
            cb(err)
        } else {
            readData(cb)
        }
    })
}

module.exports = {
    readData,
    addTips
}