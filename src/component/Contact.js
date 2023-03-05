import React, { useState, useEffect } from "react";

const Contact = () => {
  const [contact, setContact] = useState(false);
  const [location, setLocation] = useState(false);
  //   useEffect(() => {
  //     return () => {
  //       if (contact) {
  //         setLocation(false);
  //       }
  //     };
  //   }, [contact]);
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log(info);
  };
  return (
    <div id="contact">
      {location && <div className="conatct-display">location</div>}
      {contact && (
        <div className="conatct-display">
          <div className="form-body">
            {/* <div className="form-group"> */}
            {/* <div className="form-title"> */}
            <label htmlFor="bc_writer_name">NAME 이름</label>
            {/* </div> */}
            {/* <div className="form-content"> */}
            {/* <div className="textarea-wrap"> */}
            <input
              className={info?.name && "has-text"}
              name="name"
              onChange={handleChange}
              required="required"
              placeholder="이름"
            />
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="form-group"> */}
            {/* <div className="form-title"> */}
            <label htmlFor="bc_subtitle">PHONE NUMBER 전화번호</label>
            {/* </div> */}
            {/* <div className="form-content"> */}
            {/* <div className="textarea-wrap"> */}
            <input
              className={info?.number && "has-text"}
              // className="input-default valid_input"
              required="required"
              placeholder="전화번호"
              name="number"
              onChange={handleChange}
              value={info?.number}
            />
            {/* </div>
              </div>
            </div> */}
            {/* <div className="form-group">
              <div className="form-title"> */}
            <label htmlFor="bc_writer_email">EMAIL 메일</label>
            {/* </div> */}
            {/* <div className="form-content"> */}
            {/* <div className="textarea-wrap"> */}
            <input
              className={info?.email && "has-text"}
              required="required"
              placeholder="메일"
              name="email"
              onChange={handleChange}
            />
            {/* </div>
              </div>
            </div> */}
            {/* <div className="form-group type-content"> */}
            {/* <div className="form-title"> */}
            <label htmlFor="bc_content">
              MEMO 내용
              <p className="desc">
                공사 하실 곳과 평형 수, 공사 시기등을 문의 내용으로
                기재해주세요.
              </p>
            </label>
            {/* </div> */}

            {/* <div className="textarea-wrap"> */}
            <textarea
              className={info?.content && "has-text"}
              required="required"
              placeholder="내용"
              name="content"
              onChange={handleChange}
              value={info?.content}
            />
            {/* <span className="content-underline" /> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      )}
      <div className="btn-wrap">
        <span
          className={`${contact ? `text-animation-on` : ""} " text-animation`}
          onClick={() => {
            if (!contact && location) setLocation(false);
            setContact(!contact);
          }}
        >
          CONTACT
        </span>
        <span
          className={`${location ? `text-animation-on` : ""} " text-animation`}
          onClick={() => {
            if (contact && !location) setContact(false);
            setLocation(!location);
          }}
        >
          LOCATION
        </span>
      </div>
    </div>
  );
};

export default Contact;
