const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let RoomSchema = new Schema({
    roomName: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    creator: {type: String, required: true, max: 100},
    roomTitle: {type: String, required: true, max: 100},
    roomPublic: {type: String, required: true, max:100},
});

// Export the model
module.exports = mongoose.model('Room', RoomSchema);
