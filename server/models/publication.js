import mongoose from 'mongoose';

const PubSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    publicationDate: {
        type: Date,
        required: true
    },
    cvFilePath: {
        type: String,
        required: true
    },
    proposalPath: {
        type: String,
        required: true
    }
});

const publicationModel = mongoose.model('publications', PubSchema);

export default publicationModel;
