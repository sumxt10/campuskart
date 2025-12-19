import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/colleges", async (req, res) => {
  const response = await fetch(
    "http://universities.hipolabs.com/search?country=India"
  );
  const data = await response.json();
  res.json(data);
});

app.listen(5000, () => console.log("Server running on 5000"));
