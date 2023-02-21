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
      <div className="btn-wrap">
        <span
          style={{ color: contact && "red" }}
          onClick={() => {
            if (!contact && location) setLocation(false);
            setContact(!contact);
          }}
        >
          CONTACT
        </span>
        <span
          style={{ color: location && "red" }}
          onClick={() => {
            if (contact && !location) setContact(false);
            setLocation(!location);
          }}
        >
          LOCATION
        </span>
      </div>
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
                  <div
                    className="textarea onlyText"
                    contentEditable="true"
                    data-terget="bc_writer_name"
                    required="required"
                  />
                  <div className="textarea-placeholder">이름</div>
                  <input
                    type="hidden"
                    name="bc_writer_name"
                    id="bc_writer_name"
                    className="input-default valid_input form-control"
                    data-exp=""
                    data-label="이름"
                    required="required"
                    placeholder="이름"
                    defaultValue=""
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
                  <div
                    className="textarea onlyText"
                    contentEditable="true"
                    data-terget="bc_subtitle"
                    required="required"
                  />
                  <div className="textarea-placeholder">전화번호</div>
                  <input
                    type="hidden"
                    name="bc_subtitle"
                    id="bc_subtitle"
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
                  <div
                    className="textarea onlyText"
                    contentEditable="true"
                    data-terget="bc_writer_email"
                    required="required"
                  />
                  <div className="textarea-placeholder">메일</div>
                  <input
                    type="hidden"
                    id="bc_writer_email"
                    name="bc_writer_email"
                    className="input-default valid_input"
                    required="required"
                    placeholder="메일"
                    data-exp="email"
                    data-label="메일"
                    defaultValue=""
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
              <div className="form-content">
                <div className="textarea-wrap">
                  <div
                    className="textarea onlyText longSentence"
                    contentEditable="true"
                    data-terget="#bc_content"
                  />
                  <textarea
                    name="bc_content"
                    id="bc_content"
                    className="hide input-textarea valid_input"
                    cols={10}
                    rows={10}
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
        </div>
      )}
    </div>
  );
};

export default Contact;
