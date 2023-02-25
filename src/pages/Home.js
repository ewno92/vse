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
  const [list, setList] = useState(images);
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  setList(images);
  useEffect(() => {
    return async () => {
      const temp = [...list];
      let firstAndSecondArray;
      firstAndSecondArray = divideImageList(temp);
      setFirst([...firstAndSecondArray[0]]);
      setSecond([...firstAndSecondArray[1]]);
      console.log("temp", temp);
    };
  }, [list]);

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
