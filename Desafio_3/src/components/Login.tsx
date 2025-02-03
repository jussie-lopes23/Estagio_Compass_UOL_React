import ButtonLogin from "./ButtonLogin"
import Forms from "./Forms"



const Login = () => {
  return (
    <div className='absolute w-screen h-screen  flex flex-col items-center'>
        <img className='-z-10 absolute w-full h-screen' src="imageLogin.png" alt="Imagem de background" />
        <p className='mt-52 text-4xl text-white'>Audio</p>
        <p className=' text-white'>It's modular and designed to last</p>
        <Forms/>
        <ButtonLogin/>
    </div>
  )
}

export default Login