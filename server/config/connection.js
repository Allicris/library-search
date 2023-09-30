const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://allicristine:Alicris051@cluster0.ovhrboy.mongodb.net/?retryWrites=true&w=majority', 
// {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,
// useFindAndModify: false,
// }
);

module.exports = mongoose.connection;
