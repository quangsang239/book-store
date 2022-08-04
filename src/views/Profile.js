import React, { useState } from "react";
import * as userAPI from "../routes/userAPI";
import { toast } from "react-toastify";
import "../styles/Profile.css";

const Profile = () => {
  const userName = JSON.parse(localStorage.getItem("currentUser"));
  const [name, setName] = useState(userName.userName);
  const [phone, setPhone] = useState(userName.userphoneNB);
  const [age, setAge] = useState(userName.userAge);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleUpdateProfile = () => {
    const newAccount = {
      userID: userName.userID,
      userName: name,
      userAge: age,
      userphoneNB: phone,
      userImage: userName.userImage,
      accountName: userName.accountName,
      accountPass: password,
      roleID: userName.roleID,
    };
    if (userName !== newAccount && newAccount.accountPass !== "") {
      if (confirmPassword === password) {
        userAPI
          .updateUser(newAccount)
          .then(() => {
            toast.success("Lưu thông tin thành công !", {
              position: "top-left",
              draggable: true,
              autoClose: 2000,
            });
            setPassword("");
            setConfirmPassword("");
          })
          .catch((err) => toast.error(err.message, { autoClose: 2000 }));
      } else
        toast.warning("Mật khẩu xác nhận không trùng khớp !", {
          autoClose: 2000,
        });
    } else {
      newAccount.accountPass = userName.accountPass;
      userAPI
        .updateUser(newAccount)
        .then(() => {
          toast.success("Lưu thông tin thành công !", {
            position: "top-left",
            draggable: true,
            autoClose: 2000,
          });
        })
        .catch((err) => toast.error(err.message, { autoClose: 2000 }));
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <div className="profile">
      <h2 className="profile-title">Thông tin của bạn</h2>
      <div className="name-phone">
        <div className="div-wrapper">
          <label className="label-profile label-profile-name" htmlFor="">
            Tên
          </label>
          <input
            onChange={(e) => handleChangeName(e)}
            type="text"
            className="input-profile-name"
            value={name}
          />
        </div>
        <div className="div-wrapper">
          <label className="label-profile label-profile-phone" htmlFor="">
            Số Điện Thoại
          </label>
          <input
            onChange={(e) => handleChangePhone(e)}
            type="number"
            className="input-profile-name"
            value={phone}
          />
        </div>
      </div>
      <div className="current-password">
        <div className="div-wrapper">
          <label
            className="label-profile label-profile-current-password"
            htmlFor=""
          >
            Tài Khoản
          </label>
          <input
            type="text"
            className="input-profile-name"
            value={userName.accountName}
            disabled
          />
        </div>
        <div className="div-wrapper">
          <label
            className="label-profile label-profile-current-password"
            htmlFor=""
          >
            Tuổi
          </label>
          <input
            type="number"
            className="input-profile-name"
            onChange={(e) => handleChangeAge(e)}
            value={age}
          />
        </div>
      </div>
      <div className="new-password">
        <div className="div-wrapper">
          <label
            className="label-profile label-profile-new-password"
            htmlFor=""
          >
            Mật Khẩu Mới
          </label>
          <input
            onChange={(e) => handleChangePassword(e)}
            value={password}
            type="password"
            className="input-profile-name"
          />
        </div>
        <div className="div-wrapper">
          <label
            className="label-profile label-profile-confirm-password"
            htmlFor=""
          >
            Xác Nhận Mật Khẩu Mới
          </label>
          <input
            onChange={(e) => handleChangeConfirmPassword(e)}
            value={confirmPassword}
            type="password"
            className="input-profile-name"
          />
        </div>
      </div>
      <button
        onClick={() => handleUpdateProfile()}
        className="btn-save-profile"
      >
        Lưu thông tin
      </button>
    </div>
  );
};

export default Profile;
