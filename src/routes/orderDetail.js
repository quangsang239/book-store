import axios from "axios";

export const getOrderDetails = async () => {
  const res = await axios.get(`http://localhost:8080/orderdetail/getAll`);
  return res.data;
};

export const createOrder = async (data) => {
  const res = await axios.post(
    `http://localhost:8080/orderdetail/addOrderdetail`,
    data
  );
  return res.data;
};

export const updateOrder = async (data) => {
  const res = await axios.put(
    `http://localhost:8080/orderdetail/updateOrderdetail${data.id}`,
    data
  );
  return res.data;
};

export const deleteOrder = async (id) => {
  const res = await axios.delete(
    `http://localhost:8080/orderdetail/deleteOrderdetail${id}`
  );
  return res.data;
};
