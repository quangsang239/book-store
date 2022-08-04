import axios from "axios";
export const getPayment = async () => {
  const res = await axios.get(`http://localhost:8080/payment/getAll`);
  return res.data;
};
