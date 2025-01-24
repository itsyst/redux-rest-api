import express from "express";
import cors from "cors";
import bugRoutes from "./routes/bugs";

const app = express();

// Middlewares
app.use(express.json()); // This middleware parses incoming requests with JSON payloads
app.use(cors());
 
// Routes
app.get("/", (_, res) => {
  res.send("pong 🏓");
});

app.use("/api/bugs", bugRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
