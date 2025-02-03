import { useNavigate } from "react-router-dom";


const HeaderButtonCar = () => {

    const navigate = useNavigate();

    function voltarHome(){
        try{
            navigate('/home');
        }catch{
            console.error('Não foi possível voltar para home');
        }
    }

  return (
    <div className='m-auto flex justify-between mt-4 '>
        <button onClick={voltarHome}><img src="buttonVoltar.png" alt="Botão de voltar"/></button>
        <button><img src="shoppingCart.png" alt="Botão de carrinho"/></button>
    </div>
  )
}

export default HeaderButtonCar