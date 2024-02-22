import mongoose from 'mongoose'

export const todoSchema = new mongoose.Schema(
    {
        todo: {
            type: String,
            required: true,
            minlength: 3,
            trim: true,
        },
        checked: {
            type: Boolean,
            required: true,
        },
    },
    {
        collection: 'todos',
        timestamps: true,
        versionKey: false,
    }
)

export const Todo = mongoose.model('Todo', todoSchema)
