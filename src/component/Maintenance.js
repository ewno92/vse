import React from "react";

const Maintenance = () => {
  return (
    <div id="maintenance">
      <hr />
      <h1>웹사이트 정비중입니다.</h1>
      <hr />
      <h2>웹사이트를 방문해주셔서 감사합니다.</h2>
      <h2>여러분께 보다 원활한 서비스를 제공하기 위해</h2>
      <h2>
        <bold className="red">웹사이트 정비 작업</bold> 중에 있습니다.
      </h2>
      <h2>정비중에는 문의하기만 가능합니다.</h2>
      <h2>더 나은 모습으로 찾아뵙겠습니다. 양해 부탁드립니다.</h2>

      <a
        className="icon-wrapper"
        target="_blank"
        href="https://drive.google.com/file/d/1Fl5IaxvWsZPW--Kr3790guRLNkslPa3q/view?usp=sharing"
      >
        <img src="/PDF.png" />
      </a>
      <h5>포트폴리오</h5>
      <hr />
      {/* https://drive.google.com/file/d/1Fl5IaxvWsZPW--Kr3790guRLNkslPa3q/view?usp=sharing */}
    </div>
  );
};

export default Maintenance;
