import React from "react";

const Info = () => {
  return (
    <div id="info">
      <article className="information-wrap">
        <div className="rotate">
          <div className="item-address">
            <a
              href="https://pcmap.place.naver.com/place/37438042/home"
              className="map"
              target="_blank"
            >
              <div className="ko">
                <span className="underline">
                  서울특별시 서초구 매헌로6길 3˴&nbsp;1층˴
                </span>
              </div>
              <div className="en">
                <span className="underline">1F,3, Maeheon-ro 6-gil,</span>
                <br />
                <span className="underline">Seocho-gu, Seoul, Korea</span>
              </div>
            </a>
          </div>
          <div className="item-contact">
            <a href="tel:02-3442-0401">[TEL] 02-3442-0401</a>
            <div>[FAX] 02-3442-0402</div>
            <a href="mailto:saladbowldesign@gmail.com">
              saladbowldesign@gmail.com
            </a>
          </div>
          <div className="item-sns">
            <a
              href="https://www.instagram.com/saladbowl_studio/"
              target="_blank"
            >
              <span className="underline">INSTAGRAM</span>
            </a>
          </div>
          <div className="item-copyright none block-lg">
            (C) 2015. SALADBOWL_DESIGN CO.
            <br />
            ALL RIGHT RESERVED.
          </div>
        </div>
      </article>
    </div>
  );
};

export default Info;
