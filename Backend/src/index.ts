import express from "express";
import cors from "cors";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Connect to PostgreSQL
pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL database!"))
  .catch((err) =>
    console.error("Error connecting to PostgreSQL:", err.message)
  );

// Example route
app.get("/test", (req, res) => {
  res.send("API is working");
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
