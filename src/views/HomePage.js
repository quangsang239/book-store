import React, { useState, useEffect } from "react";
import * as bookAPI from "../routes/bookAPI";
import { Link } from "react-router-dom";
import { useDispatchCart } from "../contexts/cartContext";

import "../styles/HomePage.css";
import "../styles/responsive.css";
import "../styles/style.css";

import bookImg from "../images/book.jpg";
import starImg from "../images/star.svg";
import w1Img from "../images/w1.png";
import w2Img from "../images/w2.png";
import w3Img from "../images/w3.png";

const HomePage = () => {
  const dispatch = useDispatchCart();

  const [books, setBooks] = useState([]);
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };
  useEffect(() => {
    const getBooks = () => {
      bookAPI
        .getBook()
        .then((books) => {
          setBooks(books);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getBooks();
  }, []);
  return (
    <div>
      <div className="hero_area">
        {/* <!-- header section strats --> */}
        {/* <!-- end header section -->
  <!-- slider section --> */}
        <section className="slider_section ">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>Chào mừng bạn đến với nhà sách của chúng tôi</h1>
                        <p>
                          Mỗi ngày 10 trang sách sẽ giúp thay đổi cuộc đời bạn.
                        </p>
                        <Link to="/">Đọc Thêm</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src={bookImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>Welcome to our shop</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Iste quam velit saepe dolorem deserunt quo
                          quidem ad optio.
                        </p>
                        <Link to="/">Read More</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src={bookImg} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>Welcome to our shop</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Iste quam velit saepe dolorem deserunt quo
                          quidem ad optio.
                        </p>
                        <Link to="/">Read More</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src={bookImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn_box">
              <Link
                className="carousel-control-prev"
                to="/"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </Link>
              <Link
                className="carousel-control-next"
                to="#customCarousel1"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- end slider section --> */}
      </div>

      {/* <!-- product section --> */}

      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>SÁCH NỔI BẬT</h2>
          </div>
          <div className="row">
            {books.map((book, index) => {
              if (index < 9) {
                return (
                  <div className="col-sm-6 col-lg-4" key={index}>
                    <div className="box">
                      <div className="img-box">
                        <img
                          src={book.bookImage}
                          alt=""
                          className="img-book-image"
                        />
                        {/* <Link to="/" className="add_cart_btn"> */}
                        <button
                          className="add_cart_btn btn-add-to-cart"
                          onClick={() => addToCart(book)}
                        >
                          Thêm Vào Giỏ
                        </button>
                        <button className="add_cart_btn btn-review-book">
                          <Link to={`products/id=${book.bookID}`}>
                            Xem Sách
                          </Link>
                        </button>
                        {/* </Link> */}
                      </div>
                      <div className="detail-box">
                        <h5>{book.bookName}</h5>
                        <div className="product_info">
                          <h5>{book.bookPrice.toLocaleString("vi-VN")} vnđ</h5>
                          <div className="star_container">
                            <i className="fa fa-star" aria-hidden="true">
                              <img src={starImg} alt="img"></img>
                            </i>
                            <i className="fa fa-star" aria-hidden="true">
                              <img src={starImg} alt="img"></img>
                            </i>
                            <i className="fa fa-star" aria-hidden="true">
                              <img src={starImg} alt="img"></img>
                            </i>
                            <i className="fa fa-star" aria-hidden="true">
                              <img src={starImg} alt="img"></img>
                            </i>
                            <i className="fa fa-star" aria-hidden="true">
                              <img src={starImg} alt="img"></img>
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else return null;
            })}
          </div>
          <div className="btn_box">
            <Link to="/products" className="view_more-link">
              Nhiều Sách Hơn
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- end product section -->

<!-- about section --> */}

      <section className="about_section">
        <div className="container-fluid  ">
          <div className="row">
            <div className="col-md-5 ml-auto">
              <div className="detail-box pr-md-3">
                <div className="heading_container">
                  <h2>Chúng Tôi Cung Cấp Những Gì Tốt Nhất Cho Bạn</h2>
                </div>
                <p>
                  Đọc sách là cách tốt nhất để tiếp thu văn hóa thế giới, làm
                  giàu thêm vốn hiểu biết của bản thân. Đọc sách giúp kích thích
                  các dây thần kinh não bộ, giảm chứng mất trí nhớ, giữ cho bộ
                  não hoạt động, tránh lão hóa. Nếu thực hiện việc đọc sách
                  nhiều lần sẽ khiến chúng ta trở nên thông minh hơn.
                </p>
                <Link to="#customCarousel1">Đọc Thêm</Link>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="img-box">
                <img
                  style={{ width: "760px", height: "500px" }}
                  src="https://m.media-amazon.com/images/I/61w3SOnmcdL._AC_SL1140_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end about section -->

<!-- why us section --> */}

      <section className="why_us_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Tại Sao Chọn Chúng Tôi</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img src={w1Img} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Giao Hàng Nhanh</h5>
                  <p>Nhanh chóng đưa sản phẩm tới các bạn</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img src={w2Img} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Free Shiping</h5>
                  <p>Miễn phí và sẽ luôn như vậy</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img src={w3Img} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Chất Lượng</h5>
                  <p>Chất lượng là hàng đầu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
<!-- end why us section -->



<!-- info section --> */}

      {/* <!-- end info_section -->


<!-- footer section --> */}
      {/* <!-- footer section --> */}
    </div>
  );
};

export default HomePage;
