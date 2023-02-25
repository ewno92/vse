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
  const list = [...images];
  const { width } = useWindowDimensions();
  // const [first, setFirst] = useState();
  // const [second, setSecond] = useState();

  const temp = [...list];
  let firstAndSecondArray;
  firstAndSecondArray = divideImageList(temp);
  const first = firstAndSecondArray[0];
  const second = firstAndSecondArray[1];
  console.log("temp", temp);

  console.log("width", width);
  console.log("first", first);
  console.log("second", second);

  useEffect(() => {
    return async () => {
      console.log(first);
      console.log(second);
    };
  }, [width]);
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
          <div style={{ paddingTop: "300px" }}>
            <div style={{ background: "white" }}>
              {list?.map((img, i) => (
                <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
