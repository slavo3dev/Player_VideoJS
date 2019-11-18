import React from "react";
import { render } from "react-dom";
import Videojs from "./video.js";

const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 300,
  controls: true,
  sources: [
    {
      src:
        "https://kanapi.media.kan.org.il/Redirector/ipbc/direct/kan-reka/hls-live.m3u8",
      type: "application/x-mpegURL"
    }
  ]
};

const App = () => (
  <div>
    <Videojs {...videoJsOptions} />
  </div>
);

render(<App />, document.getElementById("root"));
