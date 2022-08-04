import React, { useReducer, useContext, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const found = state.find(
        (element) => element.bookID === action.item.bookID
      );
      if (found) {
        toast.warning("Sản phẩm đã có trong giỏ hàng !", {
          position: "top-left",
          draggable: true,
          autoClose: 2000,
        });
        return state;
      } else {
        toast.success("Thêm sản phẩm thành công !", {
          position: "top-left",
          autoClose: 2000,
          limit: 2,
        });
        return [...state, action.item];
      }
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      toast.success("Đã xoá sản phẩm ra khỏi giỏ hàng !", {
        position: "top-left",
        autoClose: 2000,
      });
      return newArr;
    case "DELETE":
      const arrEmpty = [];
      return arrEmpty;
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        <ToastContainer />
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
