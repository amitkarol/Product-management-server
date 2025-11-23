import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import productRoutes from "./Routes/productRoutes.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// --- API ROUTES ---
app.use("/api", productRoutes);

// --- SERVE REACT BUILD ---
app.use(express.static(path.join(__dirname,"client")));

// --- CATCH ALL FOR REACT ROUTER ---
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// --- CONNECT TO DB AND START SERVER ---
const PORT = process.env.PORT || 8000;
const MONGO = process.env.MONGO_URL;

mongoose
  .connect(MONGO)
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
      console.log(`Open in browser: http://localhost:${PORT}/`);
    });
  })
  .catch((err) => console.log("MongoDB Error: ", err));
