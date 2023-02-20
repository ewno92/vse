import React from "react";
import Info from "../component/Info";
import { images } from "../component/img";
import HomeGallery from "../component/HomeGallery";
const Home = () => {
  return (
    <div id="home">
      <div className="col">
        <div className="info-wrap">
          <Info />
        </div>
      </div>
      <div className="col">
        <div className="col-2">
          {images.map((img) => (
            <HomeGallery item={img} />
          ))}
        </div>
      </div>
      <div className="col col-3">3333</div>
    </div>
  );
};

export default Home;
