const mongoose = require('mongoose');
const {Schema} = mongoose;

const definition = {
  username: String,
  password: String
}

const userSchema = new Schema(definition, {timestamps: true});
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;