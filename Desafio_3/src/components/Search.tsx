import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Produtos from "./Produtos";
import Produtos2 from "./Produtos2";
import CarrinhoCompras from "./CarrinhoCompras";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  details: string;
  img: string;
  reviews: {
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    postedAt: string;
  }[];
  popularity: number;
  createdAt: string;
};

const Search = () => {
  const navigate = useNavigate();
  const CarrinhoCompras = () => navigate("/carrinho");

  function voltarHome() {
    try {
      navigate("/home");
    } catch {
      console.error("Não foi possível voltar para home");
    }
  }

  const [termoBusca, setTermoBusca] = useState<string>("");
  const [produtos, setProducts] = useState<Product[]>([]);

  {/*
    const [termoBusca, setTermoBusca] = useState<string>("");
    const [produtos, setProdutos] = useState<Product[]>([]);
    
    */}
  
  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/43f9c46c-e836-4513-8c4c-cf7c89d66108");
        const data = await response.json();
        console.log("Dados da API:", data); // Verificar se os produtos estão vindo corretamente
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    buscarProdutos();
  }, []);

  const filtrarProdutos = produtos.filter((produtos) =>
    produtos.name.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between mt-2">
        <button onClick={voltarHome}>
          <img src="buttonVoltar.png" alt="Botão de voltar" />
        </button>
        <h1>Search</h1>
        <button>
          <img src="shoppingCart.png" alt="Botão de carrinho" onClick={CarrinhoCompras} />
        </button>
      </div>

      {/* Campo de pesquisa */}
      <div className="mt-3 flex items-center bg-gray-100 rounded-full p-3 w-full max-w-lg mx-auto">
        <img src="search.png" className="h-6 mx-2" alt="Lupa" />
        <input
          className="w-full bg-transparent outline-none placeholder-gray-500"
          type="text"
          placeholder="Search headphone"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
      </div>

      {/* Produto pesquisado */}
      <div className="mt-10">
        {filtrarProdutos.length > 0 ? (
          <div>
            <Produtos
              key={filtrarProdutos[0].id}
              name={filtrarProdutos[0].name}
              category={filtrarProdutos[0].category}
              price={filtrarProdutos[0].price}
              details={filtrarProdutos[0].details}
              img={filtrarProdutos[0].img}
            />
          </div>
        ) : (
          <p className="text-xl text-gray-500 text-center mt-5">Nenhum produto encontrado</p>
        )}
      </div>

      {/* Produtos populares */}
      <div className="mt-32">
        <p className="text-2xl font-bold mb-5">Popular products</p>
        {produtos.length === 0 ? (
          <p className="text-gray-500">Carregando produtos... Aguarde</p>
        ) : (
          <div className="space-y-4">
            {produtos.slice(0, 3).map((product) => (
              <Produtos2
                key={product.id} // MOVIDO para dentro do componente correto
                name={product.name}
                category={product.category}
                price={product.price}
                details={product.details}
                img={product.img}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
