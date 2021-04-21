import { Schema, model } from 'mongoose';

const imagen = new Schema({
    fileName: {
        type: String
    },
    fileUrl: String,
    fileDate: {
        type: Date,
        default: Date.now()
    }
})

export default model('imagen', imagen)

