import mongoose from "mongoose";

async function connect() {
  //   try {
  //     // Kết nối tới cơ sở dữ liệu MongoDB
  //     await mongoose.connect(process.env.ATLAS_URL, {});

  //     console.log("Connected to the database");
  //   } catch (error) {
  //     console.error("Error connecting to the database:", error.message);
  //   }
  mongoose
    .connect(
      "mongodb+srv://Nvtaikma:Nvtaikma@atlascluster.tyzidhw.mongodb.net/",
      {}
    )
    .then(() => {
      console.log("Connected to Mongo!");
    })
    .catch((err) => {
      console.error("Error connecting to Mongo", err);
    });
}

export default connect;
