import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as orderDetailAPI from "../routes/orderDetail";
const OrderManagerDetail = () => {
  const searchParams = useParams();
  const orderDetailID = searchParams.id;
  const [orderDetail, setOrderDetail] = useState([]);
  useEffect(() => {
    orderDetailAPI
      .getOrderDetails()
      .then((orderDetails) => {
        setOrderDetail(
          orderDetails.filter(
            (orderDetail) =>
              orderDetail.orderID.orderID === parseInt(orderDetailID)
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="ordered">
      <div className="container">
        <h2>ĐƠN HÀNG CỦA BẠN</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Oder#</div>
            <div className="col col-2">Tên sách</div>
            <div className="col col-3">Tổng tiền</div>
            <div className="col col-4">số lượng</div>
          </li>
          {orderDetail.map((order, index) => {
            return (
              <li className="table-row" key={index}>
                <div className="col col-1" data-label="Job Id">
                  {index + 1}
                </div>
                <div className="col col-2" data-label="Customer Name">
                  {order.bookID.bookName}
                </div>
                <div className="col col-3" data-label="Amount">
                  {order.orderdetailTotalorderdetail}
                </div>
                <div className="col col-4" data-label="Payment Status">
                  {order.orderdetailAmount}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OrderManagerDetail;
