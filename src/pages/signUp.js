import SignUpForm from "../components/signUpForm";

const SignUp = () => {
    return (
        <div className="App h-screen flex flex-col justify-center">
            <header>
                <h1 className='font-black font-xl'> Welcome! </h1>
                <p className='text-sm '> Sign up and join our fancy shmancy club! </p>
            </header>
            <body>
                <SignUpForm />                
            </body>

        </div>
    )
}

export default SignUp