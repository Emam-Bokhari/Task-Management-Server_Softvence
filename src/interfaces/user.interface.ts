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

export const USER_ROLE = {
  user: 'user',
  admin: 'admin',
} as const;

export type TUserRole = keyof typeof USER_ROLE;

// statics method
export interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser | null>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
