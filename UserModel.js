import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide name'],
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'please provide email'],
        unique: true
    },
    phonenumber: {
        type: Number,
        required: [true, 'please provide phone number']
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minlength: 8,
        maxlength: 12,
        select:false
    },
    role: {
        type: String,
        enum: ['Executive officer', 'Joint managing director', 'Managing director'],
        default:'Executive officer'
    }
})

UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return
    this.password = await bcrypt.hash(this.password, 10)
})

UserSchema.methods.comparePassword =async function (enteredPassword) {
    const ismatch = await bcrypt.compare(enteredPassword, this.password)
    return ismatch
}


export default mongoose.model('Userdata', UserSchema)