import React, { useState } from "react";
import { doPost } from "../utils";
const URL =
  "https://script.google.com/macros/s/AKfycbwhduB8nxCiKrgoIwOA1XhaTiORzWXrhxWg8VNQ8evKShpsAJTElTr7B0M-g9EBpUr4qA/exec";

const Contact = () => {
  const [info, setInfo] = useState({});
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    // setError("");
    setInfo({ ...info, [name]: value });
    setError("");
  };
  const cherckError = () => {
    if (!info?.name) {
      setError("이름을 입력하세요");
      return;
    } else if (!info?.number) {
      setError("전화번호를 입력하세요");
      return;
    } else if (!info?.number) {
      setError("전화번호를 입력하세요");
      return;
    } else if (!info?.email) {
      setError("이메일을 입력하세요");
      return;
    } else if (!info?.content) {
      setError("내용을 입력하세요");
      return;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    // alert("submit");
    const check = cherckError();
    if (check) {
      setInfo({
        name: "",
        email: "",
        number: "",
        content: "",
      });
      const res = await doPost(URL, {
        name: info.name,
        email: info.email,
        number: info.number,
        content: info.content,
      });
      if (res?.status === "success") alert("문의 감사합니다.");
      else {
        alert("오류가 발생했습니다. 나중에 다시 시도해주세요.");
      }
    }
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
          value={info?.name}
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
          value={info?.email}
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
        <p className="error">{error}</p>
        <span className="btn enter" onClick={handleSubmit}>
          ENTER
        </span>
      </div>
    </div>
  );
};

export default Contact;
