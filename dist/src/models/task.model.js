"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const queryFilters_1 = require("../utils/queryFilters");
const taskSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
// query middleware for soft delete by utils
taskSchema.pre('find', queryFilters_1.excludeDeletedQuery);
taskSchema.pre('findOne', queryFilters_1.excludeDeletedQuery);
// aggregation middleware for soft delete by utils
taskSchema.pre('aggregate', queryFilters_1.excludeDeletedAggregation);
exports.Task = (0, mongoose_1.model)('Task', taskSchema);
