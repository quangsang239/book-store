import React, { useState, useEffect } from "react";
import faFacebook from "../images/facebook-brands.svg";
import faInstagram from "../images/instagram-brands.svg";
import faTwitter from "../images/twitter-brands.svg";
import * as userAPI from "../routes/userAPI";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import * as accountAPI from "../routes/accountAPI";
import "../styles/Login.css";

const Login = () => {
  const [users, setUsers] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [btnLogin, setBtnLogin] = useState(true);

  const handleOnclickSwap = () => {
    setBtnLogin(!btnLogin);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnClickSignUp = () => {
    if (
      email !== "" &&
      password !== "" &&
      name !== "" &&
      confirmPassword !== ""
    ) {
      let temp = false;
      users.forEach((user) => {
        if (user.accountName === email) {
          temp = true;
          toast.warning("Tài khoản đã được đăng ký", {
            autoClose: 2000,
            position: "top-center",
          });
        }
      });
      if (temp === false) {
        if (password === confirmPassword) {
          const newAccount = {
            userName: name,
            accountName: email,
            accountPass: password,
            roleID: 1,
          };
          userAPI.createUser(newAccount).then(() => {
            toast
              .success("Đăng Ký Tài Khoản Thành Công!", {
                autoClose: 2000,
                position: "top-center",
              })
              .catch((err) => {
                toast.error(err.message, {
                  autoClose: 2000,
                  position: "top-center",
                });
              });
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else
          toast.warning("Mật Khẩu không Trùng Khớp!", {
            autoClose: 2000,
            position: "top-center",
          });
      }
    } else
      toast.error("Các Ô Dữ Liệu Đang Trống!", {
        autoClose: 2000,
        position: "top-center",
      });
  };
  const handleOnClickLogin = () => {
    let temp = false;
    users.forEach((user) => {
      if (user.accountName === email && user.accountPass === password) {
        temp = true;
        localStorage.setItem("currentUser", JSON.stringify(user));
        toast.success("Đăng nhập thành công !", {
          position: "top-center",
          autoClose: 1000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
    if (temp === false) {
      toast.warning("Sai tài khoản hoặc mật khẩu !", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };
  useEffect(() => {
    const fetchUsers = () => {
      userAPI
        .getUsers()
        .then((users) => {
          setUsers(users);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchUsers();
  }, []);
  return (
    <div className="login">
      {/* <ToastContainer /> */}
      <div
        className={
          btnLogin ? "container-login" : " container-login right-panel-active"
        }
        id="container"
      >
        <div className="form-container sign-up-container">
          <div className="form">
            <h1 className="Create-Account">Đăng Ký</h1>

            <input
              className="input"
              onChange={(e) => handleOnChangeEmail(e)}
              type="text"
              placeholder="Tài Khoản"
              value={email}
            />
            <input
              className="input"
              onChange={(e) => handleOnChangeName(e)}
              type="text"
              placeholder="Họ Tên"
              value={name}
            />
            <input
              className="input"
              onChange={(e) => handleOnChangePassword(e)}
              type="password"
              placeholder="Mật Khẩu"
              value={password}
            />
            <input
              className="input"
              onChange={(e) => handleOnChangeConfirmPassword(e)}
              type="password"
              placeholder="Xác Nhận Mật Khẩu"
              value={confirmPassword}
            />
            <button className="btn" onClick={() => handleOnClickSignUp()}>
              Đăng Ký
            </button>
          </div>
        </div>
        <div className="form-container sign-in-container">
          <div className="form">
            <h1 className="Create-Account">Đăng Nhập</h1>
            <div className="social-container">
              <a href="/#" alt="" className="social a">
                <img src={faFacebook} alt="Facebook" />
              </a>
              <a href="/#" alt="" className="social a">
                <img src={faInstagram} alt="Facebook" />
              </a>

              <a href="/#" alt="" className="social a">
                <img src={faTwitter} alt="Facebook" />
              </a>
            </div>
            <span className="span"></span>
            <input
              className="input"
              onChange={(e) => handleOnChangeEmail(e)}
              type="text"
              placeholder="Tên Đăng Nhâp"
              value={email}
            />
            <input
              className="input"
              onChange={(e) => handleOnChangePassword(e)}
              type="password"
              placeholder="Mật Khẩu"
              value={password}
            />
            <a alt="" className="a" href="/#">
              Quên mật khẩu?
            </a>
            <button className="btn" onClick={() => handleOnClickLogin()}>
              Đăng Nhập
            </button>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="Create-Account">Chào mừng!</h1>
              <p className="description">Hãy giữ đăng nhập với chúng tôi.</p>
              <button
                onClick={() => handleOnclickSwap()}
                className="ghost btn"
                id="signIn"
              >
                Đăng Nhập
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="Create-Account">Xin Chào!</h1>
              <p className="description">
                Đăng ký tài khoản để sử dụng dịch vụ của chúng tôi
              </p>
              <button
                onClick={() => handleOnclickSwap()}
                className="ghost btn"
                id="signUp"
              >
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
