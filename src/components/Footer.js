import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="info_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info_contact">
                <h5>
                  <Link to="#customCarousel1" className="navbar-brand">
                    <span>Web Sách</span>
                  </Link>
                </h5>
                <p>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  Số 1, Võ Văn Ngân
                </p>
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  +01 1234567890
                </p>
                <p>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  bookstore@gmail.com
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_info">
                <h5>Thông Tin</h5>
                <p>
                  Tạ Quang Sang <br />
                  Nguyễn Hồng Phúc <br />
                  Lê Minh Hiếu
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_links">
                <h5>Link</h5>
                <ul>
                  <li>
                    <Link to="/">Trang Chủ</Link>
                  </li>

                  <li>
                    <Link to="/products">Sản Phẩm</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_form ">
                <h5>Nhận Khuyến Mãi</h5>
                <form action="">
                  <input type="email" placeholder="Nhập Email" />
                  <button>Đăng Ký</button>
                </form>
                <div className="social_box">
                  <Link to="#customCarousel1">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                  <Link to="#customCarousel1">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                  <Link to="#customCarousel1">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </Link>
                  <Link
                    to="#customCarousel1
                  "
                  >
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer_section">
        <div className="container">
          <p></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
