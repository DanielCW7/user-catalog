

const Home = () => {
    return (
        <div className="App border">
            <header className='flex flex-col justify-center bg-base-100'>
                <h1 className='font-black font-xl'> Welcome! </h1>
                <p className='text-sm '> Sign up and join our fancy shmancy club! </p>
            </header>
            <form className='m-auto w-full max-w-sm mt-8'>
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
        
        
                    {/* Form page */}
                    <div className='flex justify-center gap-2'>
                        <div>              
                            <p className='text-xs text-gray-400'> New user? Sign up. </p>
                            <button className='btn btn-wide btn-sm'> Sign up </button> 
                        </div>             
                    </div>
        
                    </div>
                </form>
       </div>
    )
}

export default Home