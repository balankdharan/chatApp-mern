import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("error connecting", error);
  }
};

export default connectToMongoDB;
