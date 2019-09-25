const db = require("../database")
let Tips = db.Tips

//write your code here 

let readData = (category, cb) => {
    // console.log('sData in mongo', sData)
    Tips.find({ 'category': { $in: category } }).sort({ dateOfPublish: -1 }).exec((err, data) => {
        if (err) {
            cb(err)
        } else {
            // console.log('data:', data);
            cb(data)
        }
    })
}

module.exports = {
    readData
}
