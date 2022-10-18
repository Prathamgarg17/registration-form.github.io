import React, { useState } from "react";

const Form = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  console.log(inputData);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Input Fields are Mandatory");
    } else {
      setFlag(true);
    }
  }

  const [flag, setFlag] = useState(false);

  return (
    <form className="container" onSubmit={handleSubmit}>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            Hello {inputData.name}, You've Registered Successfully
          </h2>
        ) : (
          ""
        )}
      </pre>
      <div className="header">
        <h1>Registration form </h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={inputData.name}
          onChange={handleData}
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Your Email"
          name="email"
          value={inputData.email}
          onChange={handleData}
        ></input>
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={inputData.password}
          onChange={handleData}
        ></input>
        <br />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;