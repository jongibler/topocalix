const mongoose = require('mongoose');

  const messageSchema = new mongoose.Schema({
    text: String    
  });

  mongoose.connect('mongodb+srv://topocalixdb:calixtlahuaca@cluster0.azvgr.mongodb.net/topocalix-db?retryWrites=true&w=majority', {
      useNewUrlParser: true
  });

module.exports = mongoose.model('Message', messageSchema);