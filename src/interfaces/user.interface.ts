import { Document, Types } from 'mongoose';

export interface TUser extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    role?: 'user' | 'admin';
    status?: 'active' | 'banned';
    isDeleted?: false;
}



