import React from "react";

const Info = () => {
  return (
    <div id="info">
      <article className="information-wrap">
        <div className="rotate">
          <div>
            <a href="https://vse.vercel.com" className="map" target="_blank">
              <div className="ko">
                <span className="underline address">
                  부산광역시 중앙대로 800
                </span>
              </div>
              <div className="en">
                {/* <span className="underline">1F,3, Maeheon-ro 6-gil,</span> */}
                {/* <br /> */}
                <span className="underline">Busanjin-gu, Busan, Korea</span>
              </div>
            </a>
          </div>
          <div>
            <a href="tel:010-9315-5579">[TEL] 010-9315-5579</a>
            <div />
            {/* <div>[FAX] 02-3442-0402</div> */}
            <a href="https://vse.vercel.app/">vse.vercel.app</a>
          </div>
          <div>
            <a href="https://www.instagram.com/atelier_vse/" target="_blank">
              <span className="underline">INSTAGRAM</span>
            </a>
          </div>
          <div>
            <span>
              (C) 2016 rising vmd
              <br />
            </span>
            <span>ALL RIGHT RESERVED.</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Info;
