import React from "react";

const File1 = () => {
  return (
    <div>
      <button disabled>click 1</button>
      <button disabled>click 2</button>
      <label htmlFor="input1">UserName</label>
      <input id="input1" type="text" />
      <label htmlFor="input2">phnno</label>
      <input id="input2" type="text" />
      <div role="dummy">dummy text</div>

      <button>click me</button>
      <button>click me</button>

      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <label htmlFor="student">studentname</label>
      <input id="student" type="text" value="anil" />

      <label htmlFor="skills">skills</label>
      <input id="skills" type="checkbox" defaultChecked={true} />

      <label htmlFor="a1">a1</label>
      <input id="a1" type="text" defaultValue={"a1"} />
      <label htmlFor="a2">a1</label>
      <input id="a2" type="text" defaultValue={"a2"} />
      <label htmlFor="a3">a1</label>
      <input id="a3" type="text" defaultValue={"a3"} />

      <label htmlFor="c1">c1</label>
      <input id="c1" type="checkbox" defaultChecked={true} />
      <label htmlFor="c2">c1</label>
      <input id="c2" type="checkbox" defaultChecked={true} />
      <label htmlFor="c3">c1</label>
      <input id="c3" type="checkbox" defaultChecked={true} />

      <input type="text" placeholder="testing" />
      <input type="text" placeholder="testingg" />
      <input type="text" placeholder="testingg" />

      <button>login</button>
      <p className="para">P tag testing</p>

      <p>multiple P tag testing</p>
      <p>multiple P tag testing</p>

      <div data-testid="div-test-id">testing with test id</div>

      <div data-testid="div-multiple-test-id">testing with test id</div>
      <div data-testid="div-multiple-test-id">testing with test id</div>

   

   <input type="text" defaultValue={'GetByDisplayValue'}/>
   <textarea defaultValue={'textareaGetByDisplayValue'}/>


   <input type="text" defaultValue={'multipleGetByDisplayValue'}/>
   <textarea defaultValue={'multipleGetByDisplayValue'}/>


   <button title='clickme'>getAllByTitle</button>


   <span title='black spade suit'>I will display &#x2660;</span>
   <span title='black spade suits'>I will display &#x2626;</span>
   <span title='black spade suits'>I will display &#x2626;</span>


   <img src='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800' alt='scenery'/>

   <img src='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800' alt='scenery2'/>
   <img src='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800' alt='scenery2'/>
    </div>
  );
};

export default File1;
