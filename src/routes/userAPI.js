import axios from "axios";

export const getUsers = async () => {
  const res = await axios.get(`http://localhost:8080/user/getAll`);
  return res.data;
};

export const createUser = async (data) => {
  const res = await axios.post(`http://localhost:8080/user/addUser`, data);
  return res.data;
};

export const updateUser = async (data) => {
  const res = await axios.put(`http://localhost:8080/user/updateUser`, data);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`http://localhost:8080/user/deleteUser/${id}`);
  return res.data;
};
