import logo from './logo.svg';
import './App.css';
import Component1 from './Component1'; 
import ClassComponet from './ClassComponent/User'
import InputBox from './InputBox';
import Functiontesting from './FunctionalComponent/functionalTesting'
import File1 from './RTLQuery/File1';
import File2 from './RTLQuery/File2';
import Assertion1 from './AssertionMethods/Assertion1';
function App() {
  return (
    <div className="App">
     <Component1/>
     <InputBox/>
     <ClassComponet/>
     <Functiontesting/>
     <File1/>
     <File2/>
     <Assertion1/>

    </div>
  );
}

export default App;
