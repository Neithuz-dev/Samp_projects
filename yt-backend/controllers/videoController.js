exports.getVideos = (req, res) => {
    res.json({
        success: true,
        message: "all videos",
        videos: []
    });
};

exports.createVideo = (req, res) => {
    const { title, description } = req.body;
    res.status(201).json({
        success: true,
        message: "video created",
        video: {
            title,
            description
        }
    });
};