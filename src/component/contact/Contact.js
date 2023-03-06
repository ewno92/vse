import React, { useState, useEffect } from "react";

const Contact = () => {
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = () => {
    alert("submit");
  };
  return (
    <div id="contact">
      <form className="form-body">
        <label htmlFor="bc_writer_name">NAME 이름</label>
        <input
          className={info?.name && "has-text"}
          name="name"
          onChange={handleChange}
          required="required"
          placeholder="이름"
        />
        <label htmlFor="bc_subtitle">PHONE NUMBER 전화번호</label>
        <input
          className={info?.number && "has-text"}
          required="required"
          placeholder="전화번호"
          name="number"
          onChange={handleChange}
          value={info?.number}
        />
        <label htmlFor="bc_writer_email">EMAIL 메일</label>
        <input
          className={info?.email && "has-text"}
          required="required"
          placeholder="메일"
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="bc_content">
          MEMO 내용
          <p className="desc">
            공사 하실 곳과 평형 수, 공사 시기등을 문의 내용으로 기재해주세요.
          </p>
        </label>
        <textarea
          className={info?.content && "has-text"}
          required="required"
          placeholder="내용"
          name="content"
          onChange={handleChange}
          value={info?.content}
        />
      </form>
      <div className="btn-wrap">
        <span className="btn enter" onClick={handleSubmit}>
          ENTER
        </span>
      </div>
    </div>
  );
};

export default Contact;
