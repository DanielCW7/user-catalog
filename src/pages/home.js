
const Home = () => {
    
    return (
        <div className="App h-screen flex flex-col justify-center">
            <header>
                <h1 className='font-black font-xl'> Welcome! </h1>
                <p className='text-sm '> Sign up and join our fancy shmancy club! </p>
            </header>
            <div className="mx-auto w-full max-w-md flex flex-col justify-center">
                <form className='w-full max-w-lg mt-8'>
                    <p className='text-xs text-gray-400 m-2'> Returning user? Sign back in. </p>
                    <div className='flex flex-col gap-4'>
        
                    <div className='flex'>
                        <input type='text' className='input input-bordered grow' placeholder='Email' required/>
                    </div>
        
                    <div className='flex'>
                        <input type='password' className='input input-bordered grow' placeholder='Password' required/>
                    </div>
        
                    <div>              
                        <button className='btn btn-primary btn-outline btn-sm btn-wide'> Sign in </button>
                    </div>
                    
                    {/* divider */}
                    <div className="text-sm">
                        <p className="divider divider-neutral">or</p>
                    </div>
                    </div>
                </form>
                    {/* Form page */}
                <div className='flex justify-center gap-2'>
                    <div className="flex flex-col gap-2">              
                        <p className='text-xs text-gray-400'> New user? Sign up. </p>
                        <a href='/signup'><button className='btn btn-wide btn-sm'> Sign up </button> </a>
                    </div>             
                </div>                
            </div>   
       </div>
    )
}

export default Home