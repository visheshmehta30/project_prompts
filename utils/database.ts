import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("came here mongoose is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "share_prompt",
    });
    isConnected = true;
    console.log("came here mongoose connected");
  } catch (error) {
    console.log("came here mongoose error: ", error);
  }
};
