import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CarrinhoContext";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  details: string;
  img: string;
  popularity: number;
  createdAt: string;
};


const AllProducts = () => {
  const navigate = useNavigate();

  function voltarHome(){
    try{
        navigate('/home');
    }catch{
      console.error('Não foi possível voltar para home');
    }
}

function AcessarCrrinho(){
  try{
      navigate('/carrinho');
  }catch{
    console.error('Não foi possível acesssar o carrinho');
  }
}

function acessarProductDetails(){
  try{
      navigate("/productDetails:");
  }catch{
    console.error('Não foi possível acessar os detalhes do produto');
  }
}

  const [produtos, setProdutos] = useState<Product[]>([]);
  const [filtroProdutos, setFiltroProdutos] = useState<Product[]>([]);
  const [modoBuscaFilter, setModoBuscaFilter] = useState<boolean>(false);
  const [selecionarCategoria, setSelecionarCategoria] = useState<string | null>(null);
  const [ordenar, setOrdenar] = useState<string | null>(null);

  {/*
    const [produtos, setProdutos] = useState<Product[]>([]);
    const [filtroProdutos, setFiltroProdutos] = useState<Product[]>([]);
    const [modoBuscaFilter, setModoBuscaFilter] = useState<boolean>(false);
    const [selecionarCategoria, setSelecionarCategoria] = useState<string | null>(null);
    const [ordenar, setOrdenar] = useState<string | null>(null);
    
    */}

  const cart = useContext(CartContext);
  useEffect(() => {
    const buscarProdutos = async () => {
      const response = await fetch(
        "https://run.mocky.io/v3/43f9c46c-e836-4513-8c4c-cf7c89d66108"
      );
      const data = await response.json();
      setProdutos(data);
      setFiltroProdutos(data);
    };
    buscarProdutos();
  }, []);

  const aplicarFiltro = () => {
    let filtroBusca = [...produtos];

    if (selecionarCategoria) {
      filtroBusca = filtroBusca.filter((item) => item.category === selecionarCategoria);
    }
    if (ordenar) {
      switch (ordenar) {
        case "Popularity":
          filtroBusca.sort((a, b) => b.popularity - a.popularity);
          break;
        case "Newest":
          filtroBusca.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          break;
        case "Oldest":
          filtroBusca.sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
          break;
        case "High Price":
          filtroBusca.sort((a, b) => b.price - a.price);
          break;
        case "Low Price":
          filtroBusca.sort((a, b) => a.price - b.price);
          break;
      }
    }

    setFiltroProdutos(filtroBusca);
    setModoBuscaFilter(false);
  };

  return (
    <div className="p-8">
        
      <div className='m-auto flex justify-between mt-4 '>
        <div>
          <button onClick={voltarHome}><img src="buttonVoltar.png" alt="Botão de voltar"/></button>
          {cart && cart.carrinho.length > 0 && (
            <div className="absolute right-10 top-7 text-black w-6 h-6 flex justify-center items-center rounded-full">
              {cart.carrinho.length}
            </div>
          )}
        </div>
        <div>
          <button onClick={AcessarCrrinho}><img src="shoppingCart.png" alt="Botão de carrinho"/></button>
        </div>  
      </div>
      <h1 className="text-3xl font-black m-auto p-10 items-center flex flex-col " >All Products</h1>

      <button
        onClick={() => setModoBuscaFilter(true)}
        className="p-4 mt-5 border-2 border-gray-300 w-4/5  text-black rounded-lg"
      >
        Filter
      </button>
      {modoBuscaFilter && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex justify-center flex-col items-center">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg relative">
            <button
              onClick={() => setModoBuscaFilter(false)}
              className="absolute top-2 right-3 text-xl"
            >
              
            </button>
            <h2 className="text-xl font-bold mb-4">Filter</h2>

            <h3 className="text-lg font-semibold mb-2">Categoria</h3>
            <div className="flex gap-2 mb-4">
              <button
                className={`px-4 py-2 rounded-full ${
                  selecionarCategoria === "headphones"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() =>
                  setSelecionarCategoria(
                    selecionarCategoria === "headphones" ? null : "headphones"
                  )
                }
              >
                Headphone
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  selecionarCategoria === "headsets"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() =>
                  setSelecionarCategoria(
                    selecionarCategoria === "headsets" ? null : "headsets"
                  )
                }
              >
                Headset
              </button>
            </div>

            <h3 className="text-lg font-semibold mb-2">Sort By</h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                "Popularity",
                "Newest",
                "Oldest",
                "High Price",
                "Low Price",
              ].map((option) => (
                <button
                  key={option}
                  className={`px-4 py-2 rounded-lg ${
                    ordenar === option
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setOrdenar(ordenar === option ? null : option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold"
              onClick={aplicarFiltro}
            >
              Apply Filter
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 mt-5 bg-gray-100 rounded-xl">
        {filtroProdutos.map((product) => (
          <div
            key={product.id}
            onClick={acessarProductDetails}
            className="p-4 rounded-lg shadow-md"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-32 object-contain rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-green-600 font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
  </div>
  )
}

export default AllProducts