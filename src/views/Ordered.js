import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as orderAPI from "../routes/orderAPI";
import "../styles/Ordered.css";

const Ordered = () => {
  const userName = JSON.parse(localStorage.getItem("currentUser"));
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    orderAPI
      .getOrder()
      .then((order) => {
        setOrders(
          order.filter((order) => {
            return order.userID.userID === userName.userID;
          })
        );
        // console.log(order[1].orderID);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (orders.length > 0)
    return (
      <div className="ordered">
        <div className="container">
          <h2>ĐƠN HÀNG CỦA BẠN</h2>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Oder#</div>
              <div className="col col-2">Ngày Đặt</div>
              <div className="col col-3">Tổng đơn</div>
              <div className="col col-4">Tình trạng</div>
            </li>
            {orders.map((order, index) => {
              return (
                <Link to={`/ordered/id=${order.orderID}`}>
                  <li className="table-row" key={index}>
                    <div className="col col-1" data-label="Job Id">
                      {index + 1}
                    </div>
                    <div className="col col-2" data-label="Customer Name">
                      {order.orderDate}
                    </div>
                    <div className="col col-3" data-label="Amount">
                      {order.orderTotalorder}
                    </div>
                    <div className="col col-4" data-label="Payment Status">
                      {order.orderStatus === 0
                        ? "Đang duyệt"
                        : order.orderStatus === 1
                        ? "Đã chấp nhận"
                        : "Bị huỷ"}
                    </div>
                  </li>
                </Link>
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

export default Ordered;
