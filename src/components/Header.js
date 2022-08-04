import React, { useState } from "react";
import searchImg from "../images/search.svg";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
const Header = () => {
  const items = useCart();
  const userName = JSON.parse(localStorage.getItem("currentUser"));
  console.log(userName.roleID.roleID);
  const handleOnclickLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };
  const [state, setState] = useState("home");
  const handleOnClickHome = () => {
    setState("home");
  };
  // const handleOnClickAbout = () => {
  //   setState("about");
  // };
  const handleOnClickProduct = () => {
    setState("product");
  };
  const handleOnClickCart = () => {
    setState("cart");
  };
  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="top_nav_container">
            <div className="contact_nav">
              <Link to="/">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>Gọi : 0919984076</span>
              </Link>
              <Link to="/">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>Email : bookstore@gmail.com</span>
              </Link>
            </div>
            <form className="search_form">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm Kiếm"
              />
              <button className="">
                <img className="img-search" src={searchImg} alt="img"></img>
              </button>
            </form>
            <div className="user_option_box">
              <Link to="/" className="account-link">
                {/* <img
                  src={userName.userIimage}
                  alt="img"
                  aria-hidden="true"
                ></img> */}
                <span className="dropdown">{userName.userName}</span>
                <div className="dropdown-content">
                  <a href="/#">
                    <Link to="/profile">Cá nhân</Link>
                  </a>
                  {userName.roleID.roleID === 2 ? (
                    <a href="/#">
                      <Link to="/ordermanages">Admin</Link>
                    </a>
                  ) : null}
                  <a href="/#">
                    <Link to="/ordered">Đơn mua</Link>
                  </a>
                  <Link to="">
                    <a onClick={() => handleOnclickLogout()} href="/#">
                      Đăng xuất
                    </a>
                  </Link>
                </div>
              </Link>
              <Link
                to="/cart
              "
                className="cart-link"
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span
                  style={
                    state === "cart" ? { color: "#F3C947" } : { color: "white" }
                  }
                  onClick={() => handleOnClickCart()}
                >
                  Giỏ Hàng({items.length})
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
              <span>Web Sách</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ">
                <li
                  onClick={() => handleOnClickHome()}
                  className={state === "home" ? "nav-item active" : "nav-item"}
                >
                  <Link className="nav-link" to="/">
                    Trang Chủ <span className="sr-only">(current)</span>
                  </Link>
                </li>
                {/* <li
                  onClick={() => handleOnClickAbout()}
                  className={state === "about" ? "nav-item active" : "nav-item"}
                >
                  <Link className="nav-link" to="/about">
                    {" "}
                    Thông tin
                  </Link>
                </li> */}
                <li
                  onClick={() => handleOnClickProduct()}
                  className={
                    state === "product" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" to="/products">
                    Sản phẩm
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
