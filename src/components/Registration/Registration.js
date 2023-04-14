import React, { useState } from "react";
import InputControl from "./../InputControl/InputControl";
import "./Registration.css";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

import { useNavigate } from "react-router-dom";
const Registration = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    user: "",

  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value })
  }


  const submitData = async (event) => {

    await event.preventDefault();
    const {
      name,
      phone,
      email,
      user
    } = userData;
    const res = fetch(
      "https://livvy-58a55-default-rtdb.asia-southeast1.firebasedatabase.app/userDataRecord.json", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        user
      })
    }

    );
    if (res) {
      alert("Data Stored");
      navigate("/");
    }
    else {
      alert("Pls fill the details");
    }



  };

  return (
    <div className="registration">
      <div className="container wrapper">
        <div className="popup">
          {/* <button className="close-btn">&times;</button> */}
          <div method="POST" className="form">
            <h2>Register</h2>
            <form action="POST" method="POST">
              <div className="form-element">
                <InputControl
                  type="text"
                  name="name"
                  placeholder="Enter your Full Name"
                  label="Full Name"
                  value={userData.name}
                  onChange={postUserData}
                />
              </div>
              <div className="form-element">
                <InputControl
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Mobile No"
                  label="Mobile No"
                  value={userData.phone}
                  onChange={postUserData}
                />
              </div>
              <div className="form-element">
                <InputControl
                  type="email"
                  name="email"
                  value={userData.email}
                  placeholder="Enter Email Address"
                  label="Email "
                  onChange={postUserData}
                />
              </div>
              <div className="form-element select">
                <label htmlFor="">Select Type of User</label>
                <select
                  name="user"
                  value={userData.user}
                  onChange={postUserData}
                >
                  <option value="User">User</option>
                  <option value="Business">Business</option>
                  <option value="Creator">Creator</option>
                </select>
              </div>
              {/* <div className="form-element">
              <InputControl type="password" placeholder='Enter Password' label="Password" onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))} />
            </div> */}
              {/* <b className="error">{errorMsg}</b> */}
              <div className="form-element">
                <button type="submit" onClick={submitData}>Register</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Registration;
