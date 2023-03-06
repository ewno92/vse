import Info from "../component/Info";
import { first, second } from "../component/img";
import HomeGallery from "../component/HomeGallery";
import Modal from "../component/Modal";

import { formatNumber, useWindowDimensions } from "../component/utils";
import ContactForm from "../component/contact/ContactForm";
import { useState } from "react";
const MAX_WIDTH = 1000;
const Home = () => {
  const { width } = useWindowDimensions();
  const list = [...first, ...second];
  const [selected, setSelected] = useState(false);
  console.log("@selected", selected);
  return (
    <div id="home">
      <h1 className="logo">VSE</h1>
      {selected && <Modal selected={selected} setSelected={setSelected} />}
      {width > MAX_WIDTH && (
        <div className="col desktop-view">
          <div>
            {first?.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelected(first[i].modal);
                }}
              >
                <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
              </div>
            ))}
          </div>
        </div>
      )}
      {width > MAX_WIDTH && (
        <div className="col desktop-view">
          <div>
            {second?.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelected(second[i]?.modal);
                }}
              >
                <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
              </div>
            ))}
          </div>
        </div>
      )}
      {width > MAX_WIDTH && (
        <div className="col">
          <div className="info-wrap">
            <Info />
            <ContactForm />
          </div>
        </div>
      )}
      {/* mobile view */}
      {!(width > MAX_WIDTH) && (
        <div className="col mobile-view " style={{ paddingTop: "" }}>
          <div className="fixed">
            <Info />
            <div className="btn-wrap">
              <div id="info">
                <article className="information-wrap">
                  <div className="rotate">
                    <div>
                      <span>PROJECT</span>
                    </div>
                    <div>
                      <span>PROJECT</span>
                    </div>
                    <div>
                      <span>CONTACT</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div style={{ background: "white", paddingTop: "600px", zIndex: 3 }}>
            {list?.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelected(list[i].modal);
                }}
              >
                <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
