const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let AccountSchema = new Schema({
    username: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    token: {type: String, required: true, max: 100},
    role: {type: String, required: true, max: 100},
    manager: {type: Boolean, required: true, max:100},
    superManager: {type: Boolean, required: true, max:100}
});

// Export the model
module.exports = mongoose.model('Account', AccountSchema);
