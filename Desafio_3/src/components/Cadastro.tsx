
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';


const Cadastro = () => {

    const navigate = useNavigate();
    

    const [user] = useAuthState(auth);

    async function logarGoogle(){
        try{
            {/*wait signInWithPopup(auth, provider);*/}
            navigate("/home")
        }catch{
            console.error('Erro ao se cadaastrar com o Google');
        }
    }

    function pageSingIn(){
        navigate("/")
    }

  return (
    <div className='absolute w-screen h-screen  flex flex-col items-center'>
        <img className='-z-10 absolute w-full h-screen' src="imageLogin.png" alt="Imagem de background" />
        <p className='mt-52 text-4xl text-white'>Audio</p>
        <p className=' text-white'>It's modular and designed to last</p>
        <div className='relative top-10'>
            <form className='flex flex-col items-center justify-center'>
                <div className='flex w-80 h-12 p-10 border-2 border-white rounded-xl mb-3 text-gray-600 bg-white items-center'>
                <img className = 'w-4 h-4 mr-2' src="emailIcon.png" alt="icone do email" />
                <input className='border-none outline-none' placeholder='Email' required type='email'></input>
                </div>
                <div className='flex w-80 h-12 p-10 border-2 border-white rounded-xl mb-3 text-gray-600 bg-white items-center'>
                <img className = 'w-4 h-4 mr-2'  src="lock.png" alt="icone senha" />
                <input className='border-none outline-none' placeholder='Password' required type='password'></input>
                </div>
                
                <button className='mt-1 w-80 h-12 p-10 rounded-x bg-green-600 mb-3 flex items-center justify-center' >Sign up </button>
            </form>
        </div>
        <div className='flex flex-col items-center justify-center mt-8'>
        <button className='mt-1 w-80 h-12 p-10 outline-none mb-3 flex items-center justify-center border-transparent bg-transparent ' onClick={logarGoogle}><img className = 'mr-5' src="simbGoogle.png" alt="Símbolo do google" /> Sign up with Google</button>
        <p className='text-white mt-28'>If you have an account? <span className='text-green-500 underline'  onClick={pageSingIn}>Sign In here</span></p>

    </div>
        
    </div>
  )
}

export default Cadastro