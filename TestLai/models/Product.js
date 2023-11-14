import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type : String,
            require : true,
        },
        price: {
            type: Number,
            required: true,
          },
          desc: {
            type: String,
          },
        },
        {
          timestamps: true,
          versionKey: false,
        }
)

export default mongoose.model("product", productSchema);