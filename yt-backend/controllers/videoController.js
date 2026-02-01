const Video = require("../models/Videos");

exports.getVideos = async (req, res) => {
    const videos = await Video.find();
    res.json({ success: true, videos });
};

exports.createVideo = async (req, res) => {
    const { title, description } = req.body;

    const video = await Video.create({ title, description });

    res.status(201).json({
        success: true,
        video,
    });
};
