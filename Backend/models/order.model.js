import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true },
    products: { type: Array, required: true },
    total: { type: Number, required: true },
    address: { type: String },
    phone: { type: Number },
    email: { type: String, required: true },
    status: { type: Number, default: 0 },
  },

  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
export default Order;