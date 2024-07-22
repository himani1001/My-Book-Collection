import mongoose from 'mongoose';

const { Schema } = mongoose;

const crSchema = new Schema({
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
});

const CR = mongoose.models.CR || mongoose.model('CR', crSchema);

export { CR };
