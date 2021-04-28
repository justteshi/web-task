const mongoose = require('mongoose')
const { Schema, model: Model } = mongoose
const { String, ObjectId } = Schema.Types
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    trippHistory: [{
        type: ObjectId,
        ref: 'Tripp'
    }]
})

// match the hash with the right User password
userSchema.methods = {
    passwordsMatch(password){
        return bcrypt.compare(password, this.password )
    }
}

//Hash the User pass
userSchema.pre('save', function(next) {
    if (this.isModified('password')){
        bcrypt.genSalt(10, (err, salt) => {
            if(err) {
                return next(err)
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if(err) {
                    return next(err)
                }
                this.password = hash
                next()
            })
        })
        return
    }
    next()
})

module.exports = new Model('User', userSchema)