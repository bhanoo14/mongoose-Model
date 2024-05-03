const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/vidlyuser";

mongoose
  .connect(url)
  .catch(() => console.log("Something went Wrong"))
  .then(() => console.log("Connected to Database"));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

async function saveData() {
  const course = Course({
    name: "Pramod Vishwakarma",
    email: "pramode@gmail.com",
    password: "pramod1234",
  });

  const result = await course.save();
  console.log(result);
}

saveData();
