const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mySTD")
  .then(() => {
    console.log("Connected to Data Base");
  })
  .catch(() => {
    console.log("Could not connect to the Database");
  });

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Course name is required"],
      minglength: 3,
      maxlenth: 20,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    tags: [],
  },
  {
    timestamps: true,
  }
);

const course = mongoose.model("Course", courseSchema);
module.exports = course;
