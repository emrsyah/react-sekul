import React from "react";
import { useState } from "react";
import "./App.css";

function Form() {
  const [pass, setPass] = useState("");
  return (
    <form action="" className="flex">
      <h1>Get Started</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="inputan">
        <p>Username</p>
        <input required type="text" name="" id="" />
      </div>

      <div className="inputan">
        <p>Password</p>
        <input
          required
          type="password"
          name=""
          id=""
          onChange={(ev) => setPass(ev.value)}
        />
      </div>

      <div className="inputan">
        <p>Password Confirmation</p>
        <input rrquired type="password" name="" id="" />
      </div>
      <button>Get Started</button>
      <p className="top-margin">or login with</p>
      <div className="provider provider-g">
        <h5>Google</h5>
      </div>
      <div  className="provider provider-f">
        <h5>Facebook</h5>
      </div>
      <div  className="provider provider-git">
        <h5>Github</h5>
      </div>
    </form>
  );
}

export default Form;
