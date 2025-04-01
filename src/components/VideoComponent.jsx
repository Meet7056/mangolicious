import React, { useState } from "react";
import ReactPlayer from "react-player";
import video from "../assets/videos/video1.mp4";
import thumb from "../assets/images/thumb.png";
import { PlayCircle } from "@mui/icons-material";

export default function VideoPlayer() {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <div className="w-100 h-100">
            {/* Show Thumbnail Before Playing */}
            {!playVideo ? (
                <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setPlayVideo(true)}>
                    <img
                        src={thumb}
                        alt="Video Thumbnail"
                        className="video-container"
                    />

                    {/* Play Button Overlay */}
                    <div style={{ position: 'absolute', top: 0, left: 0 }} className="h-100 w-100 d-flex justify-content-center align-items-center">
                        <PlayCircle style={{ fontSize: 50, color: "white" }} />
                    </div>
                </div>
            ) : (
                // Show Video When Playing
                <div className="h-100 video-container">
                    <ReactPlayer
                        url={video}
                        playing={true}
                        controls={true}
                        loop={false}
                        width="100%"
                        height="auto"
                        muted={true}
                    />
                </div>
            )}
        </div>
    );
}
