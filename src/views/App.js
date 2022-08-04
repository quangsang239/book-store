import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../views/HomePage";
import Product from "../views/Product";
import Login from "../views/Login";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import Ordered from "./Ordered";
import OrderDetail from "./OrderDetail";
import Profile from "./Profile";
import OrderManage from "./OrderManage";
import HeaderAdmin from "../components/HeaderAdmin";
import OrderManagerDetail from "./OrderManagerDetail";
import BooksManage from "./BookManage";
// localStorage.removeItem("currentUser");
const App = () => {
  const currentUser = localStorage.getItem("currentUser");
  const a= 2;
  if (a === 1)
  if (currentUser) {
    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <HomePage />
              </div>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <div>
                <Header />
                <Product />
              </div>
            }
          ></Route>
          <Route
            path="/ordermanages"
            element={
              <div>
                <HeaderAdmin />
                <OrderManage />
              </div>
            }
          ></Route>
          <Route
            path="/ordermanages/id=:id"
            element={
              <div>
                <HeaderAdmin />
                <OrderManagerDetail />
              </div>
            }
          ></Route>
          <Route
            path="/bookmanage"
            element={
              <div>
                <HeaderAdmin />
                <BooksManage />
              </div>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <div>
                <Header />
                <Cart />
              </div>
            }
          ></Route>
          <Route
            path="/products/id=:id"
            element={
              <div>
                <Header />
                <ProductDetail />
              </div>
            }
          ></Route>
          <Route
            path="/ordered"
            element={
              <div>
                <Header />
                <Ordered />
              </div>
            }
          ></Route>
          <Route
            path="/ordered/id=:id"
            element={
              <div>
                <Header />
                <OrderDetail />
              </div>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <div>
                <Header />
                <Profile />
              </div>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </div>
    );
  } else {
    return <Login></Login>;
  }
};

export default App;
