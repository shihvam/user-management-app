import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://shihvam:shihvam123@mongodb.vvbxb.mongodb.net/";

  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default connectToDB;
