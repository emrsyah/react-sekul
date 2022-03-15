import React, {Suspense, lazy} from "react";
import { useState } from "react";
import "./App.css";
import {XIcon} from '@heroicons/react/solid'
import {useNavigate} from 'react-router-dom';

function Form() {
  let navigate = useNavigate();

  const submitHandler = (ev) => {
    ev.preventDefault();
    if (pass !== confPass) {
      setSuccess(false);
      setNotSame(true);
    }else{
      setNotSame(false);
      setSuccess(true);
      navigate('/')
    }
    setUname("")
    setPass("")
    setConfPass("")
  };

  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const [notSame, setNotSame] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex-b">
      {notSame && (
        <div className="fail resMsg">
          <p>Failed, Password not equal</p>
          <XIcon onClick={()=>setNotSame(false)} />
        </div>
      )}
      {success && (
        <div className="success resMsg">
          <p>Success Submit</p>
          <XIcon onClick={()=>setSuccess(false)} />
        </div>
      )}
      <form action="" className="flex">
        <h1>Get Started</h1>
        <p className="lorem">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus quasi dicta adipisci! Neque?
        </p>
        <div className="inputan">
          <p>Username</p>
          <input
            required
            type="text"
            name=""
            id=""
            value={uname}
            onChange={(ev) => setUname(ev.target.value)}
          />
        </div>

        <div className="inputan">
          <p>Password</p>
          <input
            required
            type="password"
            name=""
            id=""
            value={pass}
            onChange={(ev) => setPass(ev.target.value)}
          />
          <p>Ini pass: {pass}</p>
        </div>

        <div className="inputan">
          <p>Password Confirmation</p>
          <input
            required
            type="password"
            name=""
            id=""
            value={confPass}
            onChange={(ev) => setConfPass(ev.target.value)}
          />
        </div>
        <button onSubmit={submitHandler}>Get Started</button>
        <div className="pemisah"></div>
        <div className="or-log">
          <p className="top-margin">or login with</p>
        </div>
        <div className="flex-bawah">
          <div className="provider provider-g">
            <h4>Google</h4>
          </div>
          <div className="provider provider-f">
            <h4>Facebook</h4>
          </div>
          <div className="provider provider-git">
            <h4>Github</h4>
          </div>
        </div>
      </form>
      <div className="kanan">
        <h1>Form Login</h1>
      </div>
    </div>
  );
}

export default Form;
