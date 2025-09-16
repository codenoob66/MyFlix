import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  try {
    const data = { title: "itot", thumbnail: "www.example.com" };
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error("error in reaching server", error);
  }
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
