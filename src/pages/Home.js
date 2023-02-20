import React from "react";
import Info from "../component/Info";
import { images } from "../component/img";
import HomeGallery from "../component/HomeGallery";
import { formatNumber } from "../component/utils";
const Home = () => {
  return (
    <div id="home">
      <div className="col">
        <div className="info-wrap">
          <Info />
        </div>
      </div>
      <div className="col">
        <div>
          {images.map((img, i) => (
            <HomeGallery item={img} index={formatNumber(i + 1)} />
          ))}
        </div>
      </div>
      <div className="col">
        <div>
          {images.map((img, i) => (
            <HomeGallery item={img} index={formatNumber(i + 1)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
