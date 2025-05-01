import { Document, Model, Types } from 'mongoose';

export interface TUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
  status?: 'active' | 'banned';
  isDeleted?: false;
}

// statics method
export interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser | null>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
