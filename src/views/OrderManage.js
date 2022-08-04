import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as orderAPI from "../routes/orderAPI";
import "../styles/Ordered.css";

import acceptImg from "../images/checked.svg";
import cancelImg from "../images/cancel.svg";

const OrderManage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderAPI
      .getOrder()
      .then((order) => {
        setOrders(order);
        // console.log(order[1].orderID);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleOnClickAccess = (order) => {
    const newOrder = order;
    newOrder.orderStatus = 1;
    orderAPI
      .updateOrder(newOrder)
      .then(() => {
        toast.success("Đã chấp nhận đơn hàng", { autoClose: 2000 });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        toast.error(error, { autoClose: 2000 });
      });
  };
  const handleOnClickDeny = (order) => {
    const newOrder = order;
    newOrder.orderStatus = 2;
    orderAPI
      .updateOrder(newOrder)
      .then(() => {
        toast.success("Đơn hàng đã bị huỷ", { autoClose: 2000 });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        toast.error(error, { autoClose: 2000 });
      });
  };
  if (orders.length > 0)
    return (
      <div className="ordered">
        <div className="container">
          <h2>QUẢN LÍ ĐƠN HÀNG</h2>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Oder#</div>
              <div className="col col-2">Ngày Đặt</div>

              <div className="col col-3">Tổng đơn</div>
              <div className="col col-3"></div>
              <div className="col col-4">Tình trạng</div>
            </li>
            {orders.map((order, index) => {
              return (
                <li className="table-row" key={index}>
                  <div className="col col-1" data-label="Job Id">
                    {index + 1}
                  </div>
                  <div className="col col-2" data-label="Customer Name">
                    {order.orderDate}
                  </div>

                  <div className="col col-3" data-label="Amount">
                    <Link to={`/ordermanages/id=${order.orderID}`}>
                      {order.orderTotalorder.toLocaleString("vi-VN")}
                    </Link>
                  </div>
                  {order.orderStatus === 0 ? (
                    <div className="col col-3 wrap-action" data-label="Amount">
                      <img
                        onClick={() => handleOnClickAccess(order)}
                        className="img-checked"
                        src={acceptImg}
                        alt=""
                      />
                      <img
                        onClick={() => handleOnClickDeny(order)}
                        className="img-checked"
                        src={cancelImg}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className="col col-3" data-label="Amount"></div>
                  )}
                  <div className="col col-4" data-label="Payment Status">
                    {order.orderStatus === 0
                      ? "Đang duyệt"
                      : order.orderStatus === 1
                      ? "Đã chấp nhận"
                      : "Bị huỷ"}
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

export default OrderManage;
