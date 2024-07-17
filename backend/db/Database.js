const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;

// const mongoose = require("mongoose");

// const connectDatabase = async () => {
//   try {
//     const dbURL = "mongodb://localhost:27017/"; // Chuỗi kết nối tới localhost
//     await mongoose.connect(dbURL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB connected with server: ${mongoose.connection.host}`);
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// module.exports = connectDatabase;