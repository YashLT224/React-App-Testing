import logo from './logo.svg';
import './App.css';
import Component1 from './Component1'; 
import ClassComponet from './ClassComponent/User'
import InputBox from './InputBox';
function App() {
  return (
    <div className="App">
     <Component1/>
     <InputBox/>
     <ClassComponet/>

    </div>
  );
}

export default App;
