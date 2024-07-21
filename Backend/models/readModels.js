import mongoose from "mongoose";    

const bookReadSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});

export const BookRead = mongoose.model('Read', bookReadSchema);