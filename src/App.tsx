import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';


function App() {

  const [users, setUsers] = useState([]);
  
  interface User {
    full_name: string,
    thumbnail: string,
    age: number,
  };

  type Employed = "active" | "inactive";

  // example
  type TechStack = Array<string>;
  const stacks:TechStack = ["python", "js", "node"];
  // 

  const tester = () => {
    console.log(users)
  };
  const handleSubmit = (e: any) => {
    e.preventDefault()

    const form = e.target;
    const formData:any = new FormData(form);
    const formJson = Object.fromEntries(formData.entries())
    console.log(formJson.userField)
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={tester}>
          test
        </button>
        
        <form onSubmit={handleSubmit}>
          {/* thumbnail */}
          {/* file upload */}

          {/* user name */}
          <input type="text" id="userField" name="userField"/>
          
          {/* employed status */}
          {/* toggle switch */}

          {/* tech stack */}
          {/* list of tech, add items */}

          <button type="submit"> Submit </button>
        </form>
        
      </header>
    </div>
  );
}

export default App;
