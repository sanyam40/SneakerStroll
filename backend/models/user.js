const {default: mongoose} = require('mongoose');

const userSchema = new mongoose.Schema({
    userMail: { type: String, required: true, unique: true, index: true },
    userName: { type: String, required: true },
    userId: { type: Number, required: true, unique: true, index: true},
    userPassword: { type: String, required: true },
    ROLE:{ type:String,enum: ['USER', 'ADMIN'], default: 'USER',required:true }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;