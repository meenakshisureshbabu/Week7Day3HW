
import './App.css';
import './mystyle.css';
import Header from './components/Header';
import Employee from './components/Employee';
import employeelist from "./models/employeelist"
import EmployeeDisplay from './components/EmployeeDisplay';

function App() {
  return (
    <div className="App">
      <div className='employeelist-div'>
        <Header text="Employee Directory"/>
        <Header/>
        <Employee details = {employeelist}/>
      </div>
      <div className="employeedisplay-div">
        <Header text="Employee"/>
        <EmployeeDisplay details = {employeelist}/>
      </div>
    </div>
  );
}

export default App;
