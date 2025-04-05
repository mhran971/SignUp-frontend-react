import "./SignUp.css";
import React from "react";

export function SignUp() {
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordR, setpasswordR] = React.useState("");
  const [accept,setaccept]=React.useState(false)
  console.log(name.length);
  console.log(email);
  console.log(password);
  console.log(passwordR);

  function Submit(e) {
    e.preventDefault();
    accepting();
  }
  function accepting(){
    return setaccept(true);
  }

  return (
    <div className="father">
      <form className="form-father" onSubmit={Submit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value) }
          placeholder="Name..."
          requir
        />
        {name.length === 0 &&accept&&<p className="error">Username is required</p>}
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email..."
          requir
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password..."
          requir
        />
        {password.length < 8 && accept===true && <p className="error">Password have to be at least 8 chars</p>}
        <label htmlFor="verifiedpassword">Verified Password: </label>
        <input
          type="password"
          id="passwordR"
          name="passwordR"
          value={passwordR}
          onChange={(e) => setpasswordR(e.target.value)}
          placeholder="Verified password..."
          requir
        />
        {password !== passwordR && accept===true && <p className="error">Varified password doesn't matched</p>}
        <button type="submit" accepting>Submit</button>
      </form>
    </div>
  );
}
