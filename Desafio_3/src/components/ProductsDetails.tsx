import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Review = {
  userId: string;
  userName: string;
  rating: number;
  comment: string;
};
type ProductProps = {
  id: string;
  name: string;
  price: number;
  img: string;
  description: string;
  details: string;
  reviews: Review[];
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/43f9c46c-e836-4513-8c4c-cf7c89d66108"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    buscarProdutos();
  }, []);

  const voltarHome = () => navigate("/home");
  const acessarcarrinho = () => navigate("/carrinho");

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [products, id]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="p-5 mx-auto">
      <div className="flex justify-between items-center my-5 mx-5">
        <div>
          <img
            onClick={voltarHome}
            className="h-8 w-8"
            src="buttonVoltar.png"
            alt="botão de voltar"
          />
          
          </div>
        <img
          onClick={acessarcarrinho}
          className="h-8 w-8"
          src="shoppingCart.png"
          alt="icone do carro de compras"
        />
      </div>
      <div className="mt-5">
        <p className="text-green-500 font-semibold">USD {product.price}</p>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        
      </div>
    </div>
  );
};

export default ProductDetails;
