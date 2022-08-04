import React, { useState, useEffect } from "react";
import * as bookAPI from "../routes/bookAPI";
import { toast } from "react-toastify";
import cancelImg from "../images/cancel.svg";
// import "../styles/Ordered.css";
import "../styles/BookManage.css";

const BooksManage = () => {
  // const userName = JSON.parse(localStorage.getItem("currentUser"));
  const [book, setBook] = useState([]);
  const [bookID, setBookID] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPublisher, setBookPublisher] = useState("");
  const [bookDate, setBookDate] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookCategory, setBookCategory] = useState("");
  const [bookImg, setBookImg] = useState("");
  const [state, setState] = useState(true);
  useEffect(() => {
    bookAPI
      .getBook()
      .then((book) => {
        setBook(book);
        // console.log(order[1].orderID);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleOnChangeBookID = (e) => {
    setBookID(e.target.value);
  };
  const handleOnChangeBookName = (e) => {
    setBookName(e.target.value);
  };
  const handleOnChangeBookPrice = (e) => {
    setBookPrice(e.target.value);
  };
  const handleOnChangeBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };
  const handleOnChangeBookPublisher = (e) => {
    setBookPublisher(e.target.value);
  };
  const handleOnChangeBookDate = (e) => {
    setBookDate(e.target.value);
  };
  const handleOnChangeBookDescription = (e) => {
    setBookDescription(e.target.value);
  };
  const handleOnChangeBookCategory = (e) => {
    setBookCategory(e.target.value);
  };
  const handleOnChangeBookImg = (e) => {
    setBookImg(e.target.value);
  };
  const handleClickInfoBook = (book) => {
    setBookID(book.bookID);
    setBookName(book.bookName);
    setBookPrice(book.bookPrice);
    setBookAuthor(book.authorName);
    setBookPublisher(book.publisher);
    setBookDate(book.publishDate);
    setBookDescription(book.bookDescription);
    setBookCategory(book.categoryID.categoryID);
    setBookImg(book.bookImage);
    setState(false);
  };
  const handleOnClickDeleteInfo = () => {
    setBookID("");
    setBookName("");
    setBookPrice("");
    setBookAuthor("");
    setBookPublisher("");
    setBookDate("");
    setBookDescription("");
    setBookCategory("");
    setBookImg("");
    setState(true);
  };
  const handleOnClickAddBook = () => {
    if (state) {
      const book = {
        bookName: bookName,
        bookPrice: bookPrice,
        bookImage: bookImg,
        authorName: bookAuthor,
        publisher: bookPublisher,
        publishDate: bookDate,
        bookDescription: bookDescription,
        categoryID: bookCategory,
      };
      bookAPI
        .createBook(book)
        .then(() => {
          handleOnClickDeleteInfo();
          toast.success("Thêm sách thành công !", { autoClose: 2000 });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          toast.error(err.message, { autoClose: 2000 });
        });
    } else {
      const book = {
        bookID: bookID,
        bookName: bookName,
        bookPrice: bookPrice,
        bookImage: bookImg,
        authorName: bookAuthor,
        publisher: bookPublisher,
        publishDate: bookDate,
        bookDescription: bookDescription,
        categoryID: bookCategory,
      };
      bookAPI
        .updateBook(book)
        .then(() => {
          handleOnClickDeleteInfo();
          toast.success("Sửa sách thành công !", { autoClose: 2000 });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          toast.error(err.message, { autoClose: 2000 });
        });
    }
  };
  const handleDeleteBook = (id) => {
    bookAPI
      .deleteBook(parseInt(id))
      .then(() => {
        toast.success("Đã Xoá Sản Phẩm !", { autoClose: 2000 });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.message, { autoClose: 2000 });
      });
  };
  if (book.length > 0)
    return (
      <div className="book-manager">
        <h2 className="profile-title">Thông Tin Sách</h2>
        <div className="name-phone">
          <div className="div-wrapper">
            <label className="label-profile label-profile-name" htmlFor="">
              BookID
            </label>
            <input
              value={bookID}
              disabled
              type="text"
              className="input-profile-name"
              onChange={(e) => handleOnChangeBookID(e)}
            />
          </div>
          <div className="div-wrapper">
            <label className="label-profile label-profile-name" htmlFor="">
              Tên Sách
            </label>
            <input
              value={bookName}
              type="text"
              className="input-profile-name"
              onChange={(e) => handleOnChangeBookName(e)}
            />
          </div>
          <div className="div-wrapper">
            <label className="label-profile label-profile-phone" htmlFor="">
              Giá Sách
            </label>
            <input
              value={bookPrice}
              type="number"
              className="input-profile-name"
              onChange={(e) => handleOnChangeBookPrice(e)}
            />
          </div>
        </div>
        <div className="current-password">
          <div className="div-wrapper">
            <label
              className="label-profile label-profile-current-password"
              htmlFor=""
            >
              Tác Giả
            </label>
            <input
              type="text"
              className="input-profile-name"
              value={bookAuthor}
              onChange={(e) => handleOnChangeBookAuthor(e)}
            />
          </div>
          <div className="div-wrapper">
            <label
              className="label-profile label-profile-current-password"
              htmlFor=""
            >
              Nhà Xuất Bản
            </label>
            <input
              type="text"
              className="input-profile-name"
              value={bookPublisher}
              onChange={(e) => handleOnChangeBookPublisher(e)}
            />
          </div>
          <div className="div-wrapper">
            <label
              className="label-profile label-profile-current-password"
              htmlFor=""
            >
              Ngày Xuất Bản
            </label>
            <input
              type="text"
              className="input-profile-name"
              value={bookDate}
              onChange={(e) => handleOnChangeBookDate(e)}
            />
          </div>
        </div>
        <div className="new-password">
          <div className="div-wrapper">
            <label
              className="label-profile label-profile-new-password"
              htmlFor=""
            >
              Mô Tả
            </label>
            <input
              value={bookDescription}
              type="text"
              className="input-profile-name"
              onChange={(e) => handleOnChangeBookDescription(e)}
            />
          </div>
          <div className="div-wrapper">
            <label
              className="label-profile label-profile-new-password"
              htmlFor=""
            >
              Loại Sách
            </label>
            <select
              value={bookCategory}
              type="password"
              className="input-profile-name select-profile-name"
              onChange={(e) => handleOnChangeBookCategory(e)}
            >
              <option value="1">Sách khoa học</option>
              <option value="2">Sách tâm lý</option>
              <option value="3">Sách giáo khoa</option>
              <option value="4">Sách kỹ năng</option>
              <option value="5">Truyên tranh</option>
            </select>
          </div>
          <div className="div-wrapper">
            <label
              className="label-profile label-profile-confirm-password"
              htmlFor=""
            >
              bookImage
            </label>
            <input
              value={bookImg}
              type="text"
              className="input-profile-name"
              onChange={(e) => handleOnChangeBookImg(e)}
            />
          </div>
        </div>
        <div className="btn-save-profile-wrap">
          <button
            onClick={() => handleOnClickDeleteInfo()}
            className="btn-save-profile"
          >
            Xoá Dữ Liệu
          </button>
          <button
            onClick={() => handleOnClickAddBook()}
            className="btn-save-profile"
          >
            {state ? "Thêm sản phẩm" : "Lưu Sản Phẩm"}
          </button>
        </div>
        <div className="container">
          <h2>TỦ SÁCH CỦA BẠN</h2>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Oder#</div>
              <div className="col col-2">Tên Sách</div>
              <div className="col col-3">Giá tiền</div>
              <div className="col col-3">Tác giả</div>
              <div className="col col-4">Hình</div>
            </li>
            {book.map((book, index) => {
              return (
                <li
                  className="table-row"
                  key={index}
                  onClick={() => handleClickInfoBook(book)}
                >
                  <div className="col col-1" data-label="Job Id">
                    {index + 1}
                  </div>
                  <div className="col col-2" data-label="Customer Name">
                    {book.bookName}
                  </div>
                  <div className="col col-3" data-label="Amount">
                    {book.bookPrice}
                  </div>
                  <div className="col col-4" data-label="Payment Status">
                    {book.authorName}
                  </div>
                  <div className="col col-4" data-label="Payment Status">
                    <img
                      style={{ width: "80px" }}
                      src={book.bookImage}
                      alt={book.author}
                    ></img>
                    <img
                      onClick={() => handleDeleteBook(book.bookID)}
                      className="img-cancelImg"
                      src={cancelImg}
                      alt=""
                    ></img>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  else
    return (
      <div className="ordered">
        <h2>Bạn chưa có đơn hàng nào!!!</h2>
      </div>
    );
};

export default BooksManage;
