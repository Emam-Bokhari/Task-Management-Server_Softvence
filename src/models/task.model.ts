import { model, Schema } from 'mongoose';
import { TTask } from '../interfaces';
import {
  excludeDeletedAggregation,
  excludeDeletedQuery,
} from '../utils/queryFilters';

const taskSchema = new Schema<TTask>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        'artsAndCraft',
        'nature',
        'family',
        'sport',
        'friends',
        'meditation',
      ],
    },
    status: {
      type: String,
      enum: ['allTask', 'onGoing', 'pending', 'collaborativeTask', 'done'],
      default: 'pending',
    },
    endDate: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// query middleware for soft delete by utils
taskSchema.pre('find', excludeDeletedQuery);
taskSchema.pre('findOne', excludeDeletedQuery);

// aggregation middleware for soft delete by utils
taskSchema.pre('aggregate', excludeDeletedAggregation);

export const Task = model<TTask>('Task', taskSchema);
