import { model } from "mongoose"
import { IMango } from "./mango.interface"

const mangoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    variety: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        enum: ["kg", "pcs"],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min:0
    },
    origin: {
        type: String,
        
    },
    season: {
        type: String,
        enum: ["summer", "winter", "monsoon"],
        required: true
    }
}, {
    timestamps: true, // This will add createdAt and updatedAt fields
    versionKey: false // This will remove the __v field from the schema
})

const Mango =model<IMango>("Mango", mangoSchema);
export default Mango;