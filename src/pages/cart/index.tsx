import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const {cart} = useContext(CartContext);

    return ( 
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="text-2xl font-medium text-center my-4 ">Meu carrinho</h1>

            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                <p className="font-medium">Ops seu carrinho está vazio...</p>
                <Link 
                  to="/"
                  className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded"
                >
                  Acessar produtos
                </Link>
              </div>
            )}
            
            {cart.map( (item) => (
                <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
                <img className="w-28"
                src={item.cover}
                alt={item.title} />

                <strong>Preço: {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}</strong>

                <div className="flex gap-3 items-center justify-center">
                    <button className="bg-slate-600 px-2 rounded text-white font-medium  flex items-center justify-center">
                        -
                    </button>
                    <p>{item.amount}</p>
                    <button className="bg-slate-600 px-1.5 rounded text-white font-medium  flex items-center justify-center">
                        +
                    </button>
                </div>


                <strong className="float-right">
                    Subtotal: {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}
                </strong>

            </section>
            ))}

            {cart.length !== 0 && (
                <p className="mt-4 font-bold">Total: </p>
            )}

        </div>
     );
}
 
export default Cart;