import logo from './logo.svg';
import './App.css'; 
import { useState, useEffect } from 'react';


function App() {

  const [isDetails, setDetails] = useState(null)

  useEffect(() => {
    // changes login status if user is logged in
    console.log(isDetails)
  }, [isDetails])


  // capture user data for validation and sanitization
  const handleSubmit = (e: any) => {
    e.preventDefault()

    const form = e.target;
    const formData:any = new FormData(form);
    const formJson:any = Object.fromEntries(formData.entries())
    console.log(formJson)
    setDetails(formJson)
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1 className='font-black'> Welcome! </h1>
        <p className='text-sm'> Sign up and join our fancy shmancy club! </p>
      </header>

      <div className='flex flex-col justify-center bg-base-100 w-full'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-lg my-10 p-8 m-auto'>
          {/* thumbnail */}
          {/* file upload */}
          <div>
            <div className='w-32 h-32 border rounded-full m-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
          </div>    

          <div className='flex gap-2'>
            <div className='flex flex-col form-control'>
              <input type="text" id="firstName" name="firstName" className='form-input input input-bordered' placeholder='first name' required/>
            </div>
            <div className='flex flex-col form-control'>
              <input type="text" id="lastName" name="lastName" className='form-input input input-bordered' placeholder='last name' />
            </div>
          </div>


          <div className='flex flex-col form-control'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
 */}
            <label className='label text-sm'> Upload profile picture </label>
            <input type="file" id="profilePicture" name="profilePicture" className='file-input form-input input input-bordered'/>
          </div> 

          <div className='flex form-control'>
            <input type="password" id="password" name="password" className='input input-bordered' placeholder='Create a password' />
          </div>

          <button type="submit" className='btn btn-primary span form-control'> Submit </button>
        </form>    
      </div>
    </div>
  );
}

export default App;
