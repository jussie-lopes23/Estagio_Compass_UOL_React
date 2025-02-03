
import { useNavigate } from "react-router-dom";

const CarrinhoCompras = () => {
  
const navigate = useNavigate();
  const handleRedirectToHome = () => navigate("/home");



  return (
    <div className="w-full h-full p-4">

<div className="flex justify-between mt-5 items-center">
      <img
          onClick={handleRedirectToHome}
          className="h-8 cursor-pointer object-contain"
          src="buttonVoltar.png"
          alt="Voltar"
        />
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <button className="text-red-500 text-xl">🗑</button>
      </div>
    </div>
  )
}

export default CarrinhoCompras