import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    subscriber: {
      type: mongoose.Schema.Types.ObjectId, // who is subscribed to channel
      ref: "User",
    },
    channel: {
      type: mongoose.Schema.Types.ObjectId, // to whom people are subscribing
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
