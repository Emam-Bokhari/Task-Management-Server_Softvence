import mongoose, { Types } from 'mongoose';

interface IUser {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  role: string;
}

export type TTask = {
  title: string;
  description: string;
  category:
    | 'artsAndCraft'
    | 'nature'
    | 'family'
    | 'sport'
    | 'friends'
    | 'meditation';
  status?: 'allTask' | 'onGoing' | 'pending' | 'collaborativeTask' | 'done';
  endDate: string;
  createdBy?: Types.ObjectId | IUser;
  isDeleted?: boolean;
};
