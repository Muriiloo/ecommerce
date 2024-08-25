import { BsCartPlus } from "react-icons/bs";

const Home = () => {
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
          <section className="w-full">
            <img
              className="w-full rounded-lg max-h-70 mb-2"
              src="https://images.tcdn.com.br/img/img_prod/167552/fone_de_ouvido_apple_airpods_pro_mwp22be_a_13305_1_49b712f1e0c3353c688e35bd6034170e.jpg"
              alt="Logo do produto"
            />
            <p className="font-medium mt-1 mb-2">Airpods Pro</p>

            <div className="flex gap-3 items-center">
              <strong className="text-zinc-700/90">R$ 1000</strong>
              <button className="bg-zinc-900 p-1 rounded">
                <BsCartPlus size={20} color="#FFF" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
