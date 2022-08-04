import React, { useState, useEffect } from "react";
import * as bookAPI from "../routes/bookAPI";
import { Link } from "react-router-dom";
import { useDispatchCart } from "../contexts/cartContext";

import "../styles/HomePage.css";
import "../styles/responsive.css";
import "../styles/style.css";

const Product = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatchCart();
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
        {/* <!-- end header section --> */}
      </div>

      {/* <!-- product section --> */}

      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>TẤT CẢ SẢN PHẨM</h2>
          </div>
          <div className="row">
            {books.map((book, index) => {
              return (
                <div className="col-sm-6 col-lg-4" key={index}>
                  <div className="box">
                    <div className="img-box">
                      <img src={book.bookImage} alt={book.bookImage} />
                      {/* <p className="add_cart_btn"> */}
                      <button
                        className="add_cart_btn btn-add-to-cart"
                        onClick={() => addToCart(book)}
                      >
                        Thêm vào giỏ
                      </button>
                      <button className="add_cart_btn btn-review-book">
                        <Link to={`id=${book.bookID}`}>Xem Sách</Link>
                      </button>

                      {/* </p> */}
                    </div>
                    <div className="detail-box">
                      <h5>{book.bookName}</h5>
                      <div className="product_info">
                        <h5>{book.bookPrice.toLocaleString("vi-VN")} vnđ</h5>
                        <div className="star_container">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="btn_box">
            <Link to="#customCarousel1" className="view_more-link"></Link>
          </div> */}
        </div>
      </section>

      {/* <!-- end product section --> */}
    </div>
  );
};

export default Product;
