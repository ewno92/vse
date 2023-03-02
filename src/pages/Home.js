import Info from "../component/Info";
import { first, second } from "../component/img";
import HomeGallery from "../component/HomeGallery";
import Modal from "../component/Modal";

import {
  formatNumber,
  divideImageList,
  useWindowDimensions,
} from "../component/utils";
import Contact from "../component/Contact";
import { useState } from "react";
const MAX_WIDTH = 1000;
const Home = () => {
  const { width } = useWindowDimensions();
  const list = [...first, ...second];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="home">
      <h1 className="logo">VSE</h1>

      {width > MAX_WIDTH && (
        <div className="col desktop-view">
          <div>
            {first?.map((img, i) => (
              <HomeGallery
                key={i}
                item={img}
                index={formatNumber(i + 1)}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>
        </div>
      )}
      {width > MAX_WIDTH && (
        <div className="col desktop-view">
          <div>
            {second?.map((img, i) => (
              <HomeGallery
                key={i}
                item={img}
                index={formatNumber(i + 1)}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>
        </div>
      )}
      {width > MAX_WIDTH && (
        <div className="col">
          <div className="info-wrap">
            <Info />
            <Contact />
          </div>
        </div>
      )}
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      {/* mobile view */}
      {!(width > MAX_WIDTH) && (
        <div className="col mobile-view " style={{ paddingTop: "" }}>
          <div>
            <div>
              <div className="fixed">
                <Info />
              </div>
              <div
                style={{ background: "white", paddingTop: "400px", zIndex: 3 }}
              >
                {list?.map((img, i) => (
                  <HomeGallery
                    key={i}
                    item={img}
                    index={formatNumber(i + 1)}
                    setIsOpen={setIsOpen}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
