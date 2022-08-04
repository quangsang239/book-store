import axios from "axios";

export const getBook = async () => {
  const res = await axios.get(`http://localhost:8080/book/getAll`);
  return res.data;
};
export const getBookById = async (id) => {
  const res = await axios.get(`http://localhost:8080/book/getBookById/${id}`);
  return res.data;
};

export const createBook = async (data) => {
  const res = await axios.post(`http://localhost:8080/book/addBook`, data);
  return res.data;
};

export const updateBook = async (data) => {
  const res = await axios.put(`http://localhost:8080/book/updateBook`, data);
  return res.data;
};

export const deleteBook = async (id) => {
  const res = await axios.delete(`http://localhost:8080/book/deleteBook/${id}`);
  return res.data;
};
