import { ReactNode, createContext, useState } from "react";
import { ProductsProps } from "../pages/home";

interface CartContext {
  cart: CartProps[];
  amount: number;
  addCart: (newItem: ProductsProps) => void;
  removeCart: (product: CartProps) => void;
  total: string;
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
  const [ total, setTotal ] = useState("");

  function addCart(newItem: ProductsProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem != -1) {
      // eslint-disable-next-line prefer-const
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalCart(cartList);
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


  function removeCart(product: CartProps){
    const indexItem = cart.findIndex((item)=> item.id === product.id);

    if(cart[indexItem]?.amount > 1){
      // eslint-disable-next-line prefer-const
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount -1;
      cartList[indexItem].total =  cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalCart(cartList);
      return;
    }

    //se tiver apenas um tem que remover
    const removeItem = cart.filter((item)=> item.id !== product.id);

    setCart(removeItem);
    totalCart(removeItem);
  }

  function totalCart(itens:CartProps[]){
    // eslint-disable-next-line prefer-const
    let result = itens.reduce((acc, obj)=> { return acc + obj.total }, 0);
    const formatedResult = result.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})
    setTotal(formatedResult);
  }

  return (
    <CartContext.Provider value={{ cart, amount: cart.length, addCart, removeCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
