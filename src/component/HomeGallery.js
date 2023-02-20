import React from "react";

const HomeGallery = ({ item }) => {
  console.log("items", item);
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
      <div class="title-wrap">
        <div class="rotate">
          <div class="sticky">
            <span class="num">[001]</span>
            <span class="title">ACR COFFEE -K SQUARE 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
