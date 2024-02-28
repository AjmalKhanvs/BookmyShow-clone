import mongoose, { Schema} from "mongoose";

const schema = new mongoose.Schema({
    Mvname: {
        type: String,
        required: true,
        unique: true
    },
    lang: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true

    }
});

 export default mongoose.model.bms || mongoose.model("bmss", schema);