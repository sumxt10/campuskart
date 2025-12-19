import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("CampusKart backend running 🚀");
});

app.get("/api/colleges", async (req, res) => {
  try {
    const response = await fetch(
      "https://universities.hipolabs.com/search?country=India"
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("FETCH ERROR:", err);
    res.status(500).json({ error: "Failed to fetch colleges" });
  }
});

app.listen(5000, () =>
  console.log("Backend running on https://localhost:5000")
);
