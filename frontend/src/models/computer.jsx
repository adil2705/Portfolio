import React from "react";

const SketchfabEmbed = () => {
  return (
    <div className="sketchfab-embed-wrapper" style={{ maxWidth: "100%", height: "500px" }}>
      <iframe
        title="Computer and laptop"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/8757cd8dd5c941248cc1048fd6368290/embed"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
      <p style={{ fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A" }}>
        <a
          href="https://sketchfab.com/3d-models/computer-and-laptop-8757cd8dd5c941248cc1048fd6368290?utm_medium=embed&utm_campaign=share-popup&utm_content=8757cd8dd5c941248cc1048fd6368290"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          Computer and laptop
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/sugaa?utm_medium=embed&utm_campaign=share-popup&utm_content=8757cd8dd5c941248cc1048fd6368290"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          sugaa
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8757cd8dd5c941248cc1048fd6368290"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabEmbed;
