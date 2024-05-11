import React from "react";
import "./MyPage.css";
import { useState } from "react";

function MyPage() {

    const initialUserInfo = {
        name: '',
        email: '',
        age: '',
        gender: '',
      };
    
      const [userInfo, setUserInfo] = useState(initialUserInfo);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          [name]: value,
        }));
      };

    return (
        <div className="mypage-container">
      <h2>My Page</h2>
      <div className="userinfo">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={userInfo.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={userInfo.gender}
            onChange={handleChange}
            defaultValue=""
          >
            <option value="" disabled hidden>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </div>
    );
};

export default MyPage;