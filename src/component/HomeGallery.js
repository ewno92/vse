import React from "react";

const HomeGallery = ({ item, index }) => {
  return (
    <div id="home-gallery">
      <div className="img-wrap">
        <img
          src={item.add}
          alt="Girl in a jacket"
          width="500"
          height="600"
        ></img>
      </div>
      <div className="title-wrap">
        <div className="rotate">
          <div className="sticky">
            <span className="num">[{index}]</span>
            <span className="title">ACR COFFEE -K SQUARE 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
