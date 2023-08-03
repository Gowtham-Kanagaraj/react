import './App.css';
import Employee from './components/Employee';

function App() {

  console.log("we are showing employee component")
  const showEmployees = false;
  return (
    <div className="App">

      {showEmployees ? (
        <>
        <Employee />
        </>
      ): (<p> You cannot view employee </p>
      )}
    
    </div>
  );
}

export default App;
