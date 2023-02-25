import React, { useState, useEffect } from "react";
import Info from "../component/Info";
import { images } from "../component/img";
import HomeGallery from "../component/HomeGallery";
import {
  formatNumber,
  divideImageList,
  useWindowDimensions,
} from "../component/utils";
import Contact from "../component/Contact";
const MAX_WIDTH = 1000;
const Home = () => {
  const { width } = useWindowDimensions();
  const list = images;
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();

  useEffect(() => {
    return async () => {
      const temp = [...list];
      const firstAndSecondArray = await divideImageList(temp);
      setFirst(firstAndSecondArray[0]);
      setSecond(firstAndSecondArray[1]);
    };
  }, []);

  console.log("width", width);
  console.log("first", first);
  console.log("second", second);
  return (
    <div id="home">
      {width > MAX_WIDTH && (
        <div className="col desktop-view">
          <div>
            {first?.map((img, i) => (
              <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
            ))}
          </div>
        </div>
      )}

      {width > MAX_WIDTH && (
        <div className="col desktop-view">
          <div>
            {second?.map((img, i) => (
              <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
            ))}
          </div>
        </div>
      )}
      <div className="col">
        <div className="info-wrap">
          <Info />
          <Contact />
        </div>
      </div>
      {/* mobile view */}
      {!(width > MAX_WIDTH) && (
        <div className="col mobile-view">
          <div>
            {list?.map((img, i) => (
              <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
