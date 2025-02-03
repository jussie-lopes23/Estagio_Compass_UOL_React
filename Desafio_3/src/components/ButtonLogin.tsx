
import { auth, provider } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";


const ButtonLogin = () => {
    const navigate = useNavigate();
    const navigate2 = useNavigate();

    const [user] = useAuthState(auth);

    async function logarGoogle(){
        try{
            await signInWithPopup(auth, provider);
            navigate("/home")
        }catch{
            console.error('Erro ao logar com o Google');
        }
    }

    function SignUp(){
        navigate2("/cadastro");
    }

  return (
    <div className='flex flex-col items-center justify-center mt-8'>
        <button className='mt-1 w-80 h-12 p-10 outline-none mb-3 flex items-center justify-center border-transparent bg-transparent ' onClick={logarGoogle}><img className = 'mr-5' src="simbGoogle.png" alt="Símbolo do google" /> Sign in with Google</button>
        <p className='text-white mt-28'>Didn’t have any account? <span className='text-green-500 underline'  onClick={SignUp}>Sign Up here</span></p>

    </div>
  )
}

export default ButtonLogin