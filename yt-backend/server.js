const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app = express();
const PORT = 5000;
app.use(express.json());

// connect to database
connectDB();

const videoRoutes = require("./routes/videoRoutes");
app.use("/api/videos", videoRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("server is running");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})