import React, { useState, useMemo, useEffect } from "react";
import "../styles/Cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart, useDispatchCart } from "../contexts/cartContext";
import * as paymentAPI from "../routes/paymentAPI";
import * as orderAPI from "../routes/orderAPI";
import * as orderDetail from "../routes/orderDetail";
import cartIsEmpty from "../images/cartEmpty.png";

const Cart = () => {
  const item = useCart();

  const [totalOrder, setTotalOrder] = useState(0);
  const dispatch = useDispatchCart();
  const [payment, setPayment] = useState([]);
  useEffect(() => {
    paymentAPI
      .getPayment()
      .then((payment) => setPayment(payment))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    const initialValue = 0;
    const totalAll = item.reduce(
      (total, item) => total + item.bookPrice,
      initialValue
    );
    setTotalOrder(totalAll);
  }, [item]);
  const items = useMemo(() => {
    const quantity = [];
    const total = [];
    for (let i = 0; i < item.length; i++) {
      quantity[i] = 1;
      total[i] = item[i].bookPrice;
    }
    return { quantity: quantity, total: total };
  }, [item]);
  const quantity = items.quantity;
  const total = items.total;
  const handleOnChangQuantity = (e, index) => {
    quantity[index] = e.target.value;
    total[index] = e.target.value * item[index].bookPrice;
    const initialValue = 0;
    const totalAll = total.reduce((total, item) => total + item, initialValue);
    setTotalOrder(totalAll);
  };

  const handleRemove = (index) => {
    quantity.slice(index, 1);
    total.slice(index, 1);
    const initialValue = 0;
    const totalAll = total.reduce((total, item) => total + item, initialValue);
    setTotalOrder(totalAll);
    dispatch({ type: "REMOVE", index });
  };
  const handleOnclickCheckOut = () => {
    const yourDate = new Date();
    const currentDate = yourDate.toISOString().split("T")[0];
    const userName = JSON.parse(localStorage.getItem("currentUser"));
    orderAPI
      .createOrder({
        orderTotalorder: totalOrder,
        orderDate: currentDate,
        userID: userName,
        orderStatus: 0,
        paymentID: 4,
      })
      .then((order) => {
        toast.success("Đặt hàng thành công");
        orderAPI
          .getOrder()
          .then((order) => {
            const lastOrder = order[order.length - 1];
            for (let i = 0; i < item.length; i++) {
              orderDetail
                .createOrder({
                  orderdetailAmount: quantity[i],
                  orderdetailTotalorderdetail: total[i],
                  bookID: item[i],
                  orderID: lastOrder.orderID,
                  userID: userName,
                })
                .then(() => {})
                .catch((err) => {
                  console.log(err);
                });
            }
            dispatch({ type: "DELETE" });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (item.length !== 0) {
    return (
      <div className="cart">
        <ToastContainer />
        <h1 className="h1">Giỏ Hàng</h1>
        <div className="shopping-cart">
          <div className="column-labels">
            <label className="product-image label ">Image</label>
            <label className="product-details label">Product</label>
            <label className="product-price label">Price</label>
            <label className="product-quantity label">Quantity</label>
            <label className="product-removal label">Remove</label>
            <label className="product-line-price label">Total</label>
          </div>
          {item.map((product, index) => {
            return (
              <div className="product" key={index}>
                <div className="product-image">
                  <img src={product.bookImage} alt="" />
                </div>
                <div className="product-details">
                  <div className="product-title">{product.bookName}</div>
                  <p className="product-description"></p>
                </div>
                <div className="product-price">
                  {product.bookPrice.toLocaleString("vi-VN")} vnđ
                </div>
                <div className="product-quantity">
                  <input
                    onChange={(e) => handleOnChangQuantity(e, index)}
                    type="number"
                    value={quantity[index]}
                    min="1"
                  />
                </div>
                <div className="product-removal">
                  <button
                    onClick={() => handleRemove(index)}
                    className="remove-product"
                  >
                    Remove
                  </button>
                </div>
                <div className="product-line-price">
                  {total[index].toLocaleString("vi-VN")} vnđ
                </div>
              </div>
            );
          })}
          <div className="totals-container">
            <div className="totals">
              <div className="totals-item totals-item-total">
                <label className="label">Tổng tiền</label>
                <div className="totals-value" id="cart-total">
                  {totalOrder.toLocaleString("vi-VN")} vnđ
                </div>
              </div>
            </div>
            <button
              onClick={() => handleOnclickCheckOut()}
              className="checkout"
            >
              Checkout
            </button>
          </div>
          <h3 className="title-payment">Lựa chọn phương thức thanh toán:</h3>
          {payment.map((payment, index) => {
            return (
              <button
                className={
                  payment.paymentID === 4
                    ? "btn-cart-payment btn-active-payment"
                    : "btn-cart-payment"
                }
                key={index}
                disabled={payment.paymentID !== 4}
              >
                <img
                  className="cart-payment"
                  alt=""
                  src={payment.paymentImage}
                />
                <p>{payment.paymentName}</p>
              </button>
            );
          })}
        </div>
      </div>
    );
  } else
    return (
      <div className="cart">
        <h1 className="h1">Giỏ Hàng</h1>
        <img className="cart-empty" src={cartIsEmpty} alt="img"></img>
        <h1 className="h1">
          Chưa có gì trong giỏ hàng của bạn cả mua sắm thôi!!!
        </h1>
      </div>
    );
};

export default Cart;
