import mongoose from "mongoose";
const BannnerSchema = mongoose.schema({
    title: {
        type: String,
        require: true
    },
    subtitle: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    }
},
    {
        timestamps: true,

    })

const Banner = mongoose.model("Banner", BannnerSchema);
export default Banner;