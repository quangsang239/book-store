import axios from "axios";

export const getOrder = async () => {
  const res = await axios.get(`http://localhost:8080/order/getAll`);
  return res.data;
};

export const createOrder = async (data) => {
  const res = await axios.post(`http://localhost:8080/order/addOrder`, data);
  return res.data;
};

export const updateOrder = async (data) => {
  const res = await axios.put(`http://localhost:8080/order/updateOrder`, data);
  return res.data;
};

export const deleteOrder = async (id) => {
  const res = await axios.delete(
    `http://localhost:8080/order/deleteOrder${id}`
  );
  return res.data;
};
