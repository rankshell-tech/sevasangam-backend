import mongoose from "mongoose";

const subscriptionEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "open",
  },
  createdAt: {
    type: Date,
  },
});

const subscriptionEmailModel = mongoose.model(
  "subscriptionEmail",
  subscriptionEmailSchema
);

export default subscriptionEmailModel;
