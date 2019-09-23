const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/positiveVibes', { useNewUrlParser: true });
//atlas
mongoose.connect('mongodb+srv://asma:1234@cluster0-r1ql0.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let tipsSchema = new mongoose.Schema({
  tip: String,
  author: String,
  authorId: String,
  category: String,
  dateOfPublish: { type: Date, default: Date.now },
  like: { type: Number, default: 0 },
  dislike: { type: Number, default: 0 }
});

let Tips = mongoose.model('tips', tipsSchema);



module.exports = {
  Tips
}



