import React, { useState } from "react";
import "./FormStyles.css";
const App = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const [userdata, setUserData] = useState("")
  const onChange = e => {
    setUser((preveState) => {
      return { ...preveState, [e.target.name]: e.target.value }
    })
  }

  const isEmail = (value) => {

    //match Email

    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/.test(value);

  };



  const submitHandler = e => {

    e.preventDefault();

    const { username, email, password, confirm_password } = user;

    const isValidEmail = isEmail(email)

    console.log(isValidEmail);

    if (username.length <= 0) {

      alert("username must be at least sum characters");

    } else if (password !== confirm_password) {

      alert("passwords are not matching");

    } else {

      console.log(setUserData);

    }
  }
  return (
    <div className="form">

      <center>
        <form className="input-form">
          <div className="input">
            <h1 className="heading">Register form</h1>
            <input style={inputStyle} type="text" placeholder="username" value={user.username} name="username" onChange={onChange} required />
            <input style={inputStyle} type="email" placeholder="email id" value={user.email} name="email" onChange={onChange} required />
            <input style={inputStyle} type="password" placeholder="password" value={user.password} name="password" onChange={onChange} required />
            <input style={inputStyle} type="password" placeholder="confirm password" value={user.confirm_password} name="confirm_password" onChange={onChange} required />
            <button style={inputStyle} className="button" onClick={submitHandler}>Submit</button>
            {userdata.username}<br />
            {userdata.email}<br />
            {userdata.password}<br />
            {userdata.confirm_password}<br />
          </div>
        </form>
      </center >
    </div >

  )
}
export default App;

const inputStyle = { padding: "15px", margin: "10px", borderRadius: '15px', fontSize: "20px", display: "flex" }