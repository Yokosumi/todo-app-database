import mongoose from 'mongoose'

export const todoSchema = new mongoose.Schema(
    {
        body: {
            type: String,
            required: true,
            trim: true,
        },
        checked: {
            type: Boolean,
            required: true,
        },

        badges: {
            type: [String],
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
