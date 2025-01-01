import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import Movie from "./Models/Movie.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const adminUser = {
  id:1,
  username: "rafael",
  password: "$2b$10$nvtbj9I51T4LZMFY0OAxAO/ubojnOChrQ/s3iLtRJNd4TWyY6eUl2"
}

dotenv.config()

const app = express();
const PORT = 5000;

app.use(cors())

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

app.get("/", async (req, res) => {
  try {
    const Movies = await Movie.find();
    res.json(Movies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching videos", error });
  }
});

app.post("/movies", async (req, res) => {
  try {
    const newMovie = new Movie({
      title: req.body.title,
      thumbnail: req.body.thumbnail,
      src: req.body.src,
    });

    await newMovie.save(); // insert into MongoDB

    res.status(201).json(newMovie);
  } catch (error) {
    console.error("Error inserting movie:", error);
    res.status(400).json({ message: "Error saving movie", error });
  }
});

// Delete movie by title
app.delete("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie deleted successfully", deletedMovie });
  } catch (error) {
    console.error("Error deleting the movie", error);
    res.status(500).json({ message: "Error deleting movie", error });
  }
});


app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body; // ✅ extract from body

    if (username !== adminUser.username) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const validPass = await bcrypt.compare(password, adminUser.password);
    if (!validPass) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: adminUser.id, username: adminUser.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // expires in 1 hour
    );

    res.json({ token });
  } catch (error) {
    console.error("Error with server:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
