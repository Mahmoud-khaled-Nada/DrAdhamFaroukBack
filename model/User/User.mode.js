const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    created: {
        type:Date,
        default:Date.now
    },
});

userSchema.pre('save', async function (next) {
    try {
        if (this.isNew) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword
        }
        next()
    } catch (error) {
        next(error)
    }
})


userSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err, false);
        }
        return cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);

// comparePassword and hash