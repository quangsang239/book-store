import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatchCart } from "../contexts/cartContext";
import * as bookAPI from "../routes/bookAPI";
import "../styles/ProductDetail.css";
const ProductDetail = () => {
  const searchParams = useParams();
  const bookID = searchParams.id;
  const [book, setBook] = useState();
  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  useEffect(() => {
    const getBooks = () => {
      bookAPI
        .getBookById(bookID)
        .then((book) => {
          setBook(book);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getBooks();
  }, [bookID]);
  console.log(book, bookID);
  if (book) {
    return (
      <div>
        <body>
          <div className="wrapper">
            <div className="product-img">
              <img
                className="product-img1"
                src={book.bookImage}
                alt={book.bookName}
              />
            </div>
            <div className="product-info">
              <div className="product-text">
                <h1>{book.bookName}</h1>
                <h2>{book.authorName}</h2>
                <p>{book.bookDescription}</p>
              </div>
              <div className="product-price-btn">
                <p>
                  <span className="span">
                    {book.bookPrice.toLocaleString("vi-VN")} vnđ
                  </span>
                </p>
                <button onClick={() => addToCart(book)} type="button">
                  Mua
                </button>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  } else return null;
};

export default ProductDetail;
