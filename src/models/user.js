import { default as mongoose } from 'mongoose';

const userSchema = new mongoose.Schema({
    userMail: { type: String, required: true, unique: true, index: true },
    userPassword: { type: String, required: true },
    role:{ type:String,enum: ['USER', 'ADMIN'], default: 'USER',required:true }
});

const userModel = mongoose.model('user', userSchema);

export default userModel;