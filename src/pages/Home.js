import React, { useState, useEffect } from "react";
import Info from "../component/Info";
import { images } from "../component/img";
import HomeGallery from "../component/HomeGallery";
import { formatNumber, divideImageList } from "../component/utils";
import Contact from "../component/Contact";
const Home = () => {
  const list = images;
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();

  useEffect(() => {
    return () => {
      const temp = [...list];
      const firstAndSecondArray = divideImageList(temp);
      setFirst(firstAndSecondArray[0]);
      setSecond(firstAndSecondArray[1]);
    };
  }, []);

  return (
    <div id="home">
      <div className="col">
        <div className="info-wrap">
          <Info />
          <Contact />
        </div>
      </div>
      <div className="col">
        <div>
          {first?.map((img, i) => (
            <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
          ))}
        </div>
      </div>
      <div className="col">
        <div>
          {second?.map((img, i) => (
            <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
