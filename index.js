const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/vidlyuser";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB:", err);
  });

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 220,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 220,
  },
  password: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

async function saveData() {
  const course = new Course({
    name: "Bhanoo Vishwakarma",
    email: "baba@gmail.com",
    password: "Bhann1234",
  });

  try {
    const result = await course.save();
    console.log(result);
  } catch (err) {
    console.error("Error saving data:", err);
  }
}

saveData();
