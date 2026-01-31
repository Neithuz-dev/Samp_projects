const express = require("express");

const app = express();
const PORT = 5000;
app.use(express.json());

const videoRoutes = require("./routes/videoRoutes");
app.use("/api/videos", videoRoutes);

app.get("/", (req, res) => {
    res.send("server is running");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})