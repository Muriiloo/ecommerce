const Cart = () => {
    return ( 
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="text-2xl font-medium text-center my-4 ">Meu carrinho</h1>

            <section className="flex items-center justify-between border-b-2 border-gray-300">
                <img className="w-28"
                src="https://images.tcdn.com.br/img/img_prod/167552/fone_de_ouvido_apple_airpods_pro_mwp22be_a_13305_1_49b712f1e0c3353c688e35bd6034170e.jpg"
                alt="Logo do produto" />

                <strong>Preço: R$100,00</strong>

                <div className="flex gap-3 items-center justify-center">
                    <button className="bg-slate-600 px-2 rounded text-white font-medium  flex items-center justify-center">
                        -
                    </button>
                    <p>2</p>
                    <button className="bg-slate-600 px-1.5 rounded text-white font-medium  flex items-center justify-center">
                        +
                    </button>
                </div>


                <strong className="float-right">
                    Subtotal: R$100,00
                </strong>

            </section>

            <p className="mt-4 font-bold">Total: R$100,00</p>

        </div>
     );
}
 
export default Cart;