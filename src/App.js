import logo from './logo.svg';
import './App.css';
import Component1 from './Component1'; 
import ClassComponet from './ClassComponent/User'
import InputBox from './InputBox';
import Functiontesting from './FunctionalComponent/functionalTesting'
function App() {
  return (
    <div className="App">
     <Component1/>
     <InputBox/>
     <ClassComponet/>
     <Functiontesting/>

    </div>
  );
}

export default App;
