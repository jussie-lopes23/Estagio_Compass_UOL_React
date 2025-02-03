

const Forms = () => {
  return (
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
            
            <p className='my-1 text-white'>Forgot Password</p>
            <button className='mt-1 w-80 h-12 p-10 rounded-x bg-green-600 mb-3 flex items-center justify-center' >Sign In</button>
        </form>
    </div>
  )
}

export default Forms