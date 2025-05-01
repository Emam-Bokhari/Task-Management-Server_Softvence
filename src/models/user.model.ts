import { model, Schema } from 'mongoose';
import { TUser, UserModel } from '../interfaces';
import bcrypt from "bcrypt"
import config from '../config';


const userSchema = new Schema<TUser, UserModel>(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
            // select:0,
        },
        role: {
            type: String,
            enum: {
                values: ['user', 'admin'],
                message: '{VALUE} is not a valid role',
            },
            default: 'user',
        },
        status: {
            type: String,
            enum: {
                values: ['active', 'banned'],
                message: '{VALUE} is not a valid status',
            },
            default: 'active',
        },
        isDeleted: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

// hashed password by bcrypt
userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_rounds))
    next();
})

// password field is empty
userSchema.post("save", async function (doc, next) {
    doc.password = "";
    next()
})

// statics method for check user exists
userSchema.statics.isUserExists = async (email: string) => {
    return await User.findOne({ email: email }).select("+password")
}

// statics method for password matched
userSchema.statics.isPasswordMatched = async (plainTextPassword, hashedPassword) => {
    return await bcrypt.compare(plainTextPassword, hashedPassword)
}


export const User = model<TUser, UserModel>('User', userSchema);