import mongoose from 'mongoose';
import config from '.';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.log('Failed to connect to MongoDB', error);
  }
};
