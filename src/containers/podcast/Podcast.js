import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
// import {Player} from "video-react";
import "video-react/dist/video-react.css"; // import css
import ReactPlayer from "react-player";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  if (!podcastSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="video-container">
          <ReactPlayer
            url="https://youtu.be/Gm52IPCH5Gk?si=hPvkJsp_hL29eYtH" // Example YouTube video URL
            playing
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </Fade>
  );
}
