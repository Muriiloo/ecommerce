import { ReactNode, createContext, useState } from "react";
import { ProductsProps } from "../pages/home";

interface CartContext {
  cart: CartProps[];
  amount: number;
  addCart: (newItem: ProductsProps) => void;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderPros {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContext);

function CartProvider({ children }: CartProviderPros) {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addCart(newItem: ProductsProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem != -1) {
      // eslint-disable-next-line prefer-const
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      return;
    }
    // eslint-disable-next-line prefer-const
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((products) => [...products, data]);
  }

  return (
    <CartContext.Provider value={{ cart, amount: cart.length, addCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
