import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv"
import Movie from "./Models/Movie.js"


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



app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
