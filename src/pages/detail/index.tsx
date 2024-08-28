import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductsProps } from "../home";
import { api } from "../../api";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Detail = () => {

    const { id } = useParams();
    const [ product, setProduct ] = useState<ProductsProps>()
    const { addCart } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
            async function getProduct(){
                const response = await api.get(`/products/${id}`);
                setProduct(response.data);
            }

            getProduct();

    }, [id])

    function addProductDetailCart(product: ProductsProps){
        addCart(product);
        toast.success("Produto adicionado!")
        navigate("/cart");
    }


    return ( 

        <div className="max-w-7xl w-full flex gap-8 justify-center items-center ">
            {/* Imagem */}
            <img className="flex-1 w-full max-h-96 ml-52 object-contain mt-20" src={product?.cover} alt={product?.title}/>
            
            {/* Detalhes */}
            <div className="mt-7 mx-auto max-w-7xl">
                <h2 className="font-bold text-2xl mb-2">{product?.title}</h2>
                <p className="text-sm">{product?.description}</p>
                <div className="flex gap-6 items-center mt-5">
                   <p className="font-bold">{product?.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</p>
                   <button className="bg-zinc-900 p-1 rounded h-7" onClick={() => addProductDetailCart(product)}>
                      <BsCartPlus size={20} color="#FFF" />
                   </button>
                </div>
            </div>

        </div>
     );
}
 
export default Detail;