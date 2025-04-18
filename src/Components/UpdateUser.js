import axios from "axios";
import "../SignUp.css";
import React, { useEffect } from "react";
import Header from "../Components/Header";

export default function UpdateUser() {
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordR, setpasswordR] = React.useState("");
  const [accept, setaccept] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [runUseState, setRun] = React.useState(0);

  const id = window.location.pathname.split("/").slice(-1)[0];

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => {
        if (res) {
          return res.json();
        }
      })
      .then((data) => {
        setname(data[0].name);
        setemail(data[0].email);
        
      });
  }, [runUseState]);

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setaccept(true);
    if (name.length === 0 || password.length < 8 || password !== passwordR)
      flag = false;
    else flag = true;
    try {
      if (flag) {
        let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`, {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,
        });
        if (res.status === 200) {
          setRun((prev) => prev + 1);
          window.localStorage.setItem("email", email);
          window.location.pathname = "/Dashboard/users";
        }
      }
    } catch (err) {
      setEmailError(err.response.status);
    }
  }

  return (
    <div className="signup">
      
      <div className="father">
        <form className="form-father" onSubmit={Submit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Name..."
            requir="true"
          />
          {name.length === 0 && accept && (
            <p className="error">Username is required</p>
          )}
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email..."
            requir="true"
          />
          {accept && emailError === 422 && (
            <p className="error">Email has been taken</p>
          )}
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            // value={ }
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password..."
            requir="true"
          />
          {password.length < 8 && accept === true && (
            <p className="error">Password have to be at least 8 chars</p>
          )}
          <label htmlFor="verifiedpassword">Verified Password: </label>
          <input
            type="password"
            id="passwordR"
            name="passwordR"
            // value={ }
            onChange={(e) => setpasswordR(e.target.value)}
            placeholder="Verified password..."
            requir="true"
          />
          {password !== passwordR && accept === true && (
            <p className="error">Varified password doesn't matched</p>
          )}
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
