import { BsCartPlus } from "react-icons/bs";
import { useContext, useState, useEffect } from "react";
import { api } from "../../api";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export interface ProductsProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}


const Home = () => {

    const [products, setProducts] = useState<ProductsProps[]>([]);
    const { addCart } = useContext(CartContext);

    useEffect(()=>{
        async function getProducts(){
            const response = await api.get("/products");
            setProducts(response.data);
        }

        getProducts();
    },[])


    function addProductCart(product: ProductsProps){
        addCart(product);
        toast.success("Produto adicionado!")
    }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-center text-xl mb-4 mt-10">
          Mais vendidos
        </h1>
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map( (product) => (
            <section className="w-full" key={product.id}>
            
            <Link to={`/produtos/${product.id}`}>
              <img
                className="w-full rounded-lg max-h-70 mb-2"
                src={product.cover}
                alt={product.title}
              />
              <p className="font-medium mt-1 mb-2">{product.title}</p>
            </Link>

            <div className="flex gap-3 items-center">
              <strong className="text-zinc-700/90">{product.price.toLocaleString("pt-BR",{
                style: "currency",
                currency: "BRL"
              })}</strong>
              <button className="bg-zinc-900 p-1 rounded" onClick={() => addProductCart(product)}>
                <BsCartPlus size={20} color="#FFF" />
              </button>
            </div>
          </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
