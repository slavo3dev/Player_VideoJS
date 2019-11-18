import React from "react";
import { render } from "react-dom";
import Videojs from "./video.js";

import "./styles.css";

// const src = "https://kanapi.media.kan.org.il/Redirector/ipbc/direct/kan-reka/hls-live.m3u8";

const src =
  "https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8";

const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 900,
  height: 500,
  controls: true,
  sources: [
    {
      src: src,
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
