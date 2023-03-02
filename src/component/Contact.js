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

  return (
    <div id="contact">
      {location && <div className="conatct-display">location</div>}
      {contact && (
        <div className="conatct-display">
          <div className="form-body">
            <div className="form-group">
              <div className="form-title">
                <label htmlFor="bc_writer_name">NAME 이름</label>
              </div>
              <div className="form-content">
                <div className="textarea-wrap">
                  <input
                    data-label="이름"
                    required="required"
                    placeholder="이름"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-title">
                <label htmlFor="bc_subtitle">PHONE NUMBER 전화번호</label>
              </div>
              <div className="form-content">
                <div className="textarea-wrap">
                  <div className="textarea-placeholder">전화번호</div>
                  <input
                    className="input-default valid_input"
                    required="required"
                    placeholder="전화번호"
                    data-label="전화번호"
                    data-exp="dashnum"
                    defaultValue=""
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-title">
                <label htmlFor="bc_writer_email">EMAIL 메일</label>
              </div>
              <div className="form-content">
                <div className="textarea-wrap">
                  <input
                    required="required"
                    placeholder="메일"
                    data-exp="email"
                    data-label="메일"
                  />
                </div>
              </div>
            </div>
            <div className="form-group type-content">
              <div className="form-title">
                <label htmlFor="bc_content">
                  MEMO 내용{" "}
                  <p className="desc">
                    공사 하실 곳과 평형 수, 공사 시기등을 문의 내용으로
                    기재해주세요.
                  </p>
                </label>
              </div>

              <div className="textarea-wrap">
                <textarea
                  name="bc_content"
                  id="bc_content"
                  className="hide input-textarea valid_input"
                  required="required"
                  placeholder="내용"
                  data-label="내용"
                  defaultValue={""}
                />
                <span className="content-underline" />
              </div>
            </div>
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
