const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: String,
	avatar: String,
	age: Number,
	email: String,
	name: String,
	role: 'admin' | 'user',
    surname: String,
    password: String
});

userSchema.methods.validatePassword = async function(password) {
    return (password === this.password);
}

module.exports = model('users', userSchema);