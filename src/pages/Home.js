import Info from "../component/Info";
import { first, second } from "../component/img";
import HomeGallery from "../component/HomeGallery";
import Modal from "../component/Modal";

import { formatNumber, useWindowDimensions } from "../component/utils";
import ContactForm from "../component/contact/ContactForm";
import { useState } from "react";
import Contact from "../component/contact/Contact";
import Location from "../component/contact/Location";
import Maintenance from "../component/Maintenance";
const MAX_WIDTH = 1000;
const MAINTENANCE_MODE = 1;
const Home = () => {
  const { width } = useWindowDimensions();
  const list = [...first, ...second];
  const [selected, setSelected] = useState(false);

  //mobile btn
  const [project1, setProject1] = useState(true);
  const [project2, setProject2] = useState(false);
  const [contact, setContact] = useState(MAINTENANCE_MODE ? true : false);
  return (
    <div id="home">
      <h1 className="logo">VSE</h1>
      {selected && <Modal selected={selected} setSelected={setSelected} />}
      {width > MAX_WIDTH && (
        <div className="col desktop-view">
          <div>
            {MAINTENANCE_MODE ? (
              <></>
            ) : (
              first?.map((img, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelected(first[i].modal);
                  }}
                >
                  <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
                </div>
              ))
            )}
          </div>
        </div>
      )}
      {width > MAX_WIDTH && (
        <div className="col desktop-view">
          <div>
            {MAINTENANCE_MODE ? (
              <Maintenance />
            ) : (
              second?.map((img, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelected(second[i]?.modal);
                  }}
                >
                  <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
                </div>
              ))
            )}
          </div>
        </div>
      )}
      {width > MAX_WIDTH && (
        <div className="col">
          <div className="info-wrap">
            <Info />
            <ContactForm maintenance={MAINTENANCE_MODE} />
          </div>
        </div>
      )}
      {/* mobile view */}
      {!(width > MAX_WIDTH) && (
        <div className="col mobile-view " style={{ paddingTop: "" }}>
          <div className="fixed">
            <div id="btn-wrap">
              <article className="information-wrap">
                <div className="rotate">
                  <div>
                    <span
                      className={`${
                        contact ? `text-animation-on` : ""
                      } " text-animation btn`}
                      onClick={() => {
                        setContact(true);
                        setProject1(false);
                        setProject2(false);
                      }}
                    >
                      CONTACT
                    </span>
                  </div>
                  <span
                    className={`${
                      project1 ? `text-animation-on` : ""
                    } " text-animation btn`}
                    onClick={() => {
                      setContact(false);
                      setProject1(true);
                      setProject2(false);
                    }}
                  >
                    PROJECT1
                  </span>
                  <span
                    className={`${
                      project2 ? `text-animation-on` : ""
                    } " text-animation btn`}
                    onClick={() => {
                      setContact(false);
                      setProject1(false);
                      setProject2(true);
                    }}
                  >
                    PROJECT2
                  </span>
                </div>
              </article>
            </div>
            <Info />
          </div>
          <div style={{ background: "white", paddingTop: "380px", zIndex: 3 }}>
            {MAINTENANCE_MODE ? (
              <Maintenance />
            ) : (
              project1 &&
              first?.map((img, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelected(list[i].modal);
                  }}
                >
                  <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
                </div>
              ))
            )}
            {MAINTENANCE_MODE ? (
              <div></div>
            ) : (
              project2 &&
              second?.map((img, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelected(list[i].modal);
                  }}
                >
                  <HomeGallery key={i} item={img} index={formatNumber(i + 1)} />
                </div>
              ))
            )}
            {contact && (
              <div className="mobile-contact">
                <div className="contact-wrap">
                  <Contact />
                  <Location />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
