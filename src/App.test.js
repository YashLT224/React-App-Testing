import { fireEvent, render, screen } from '@testing-library/react';
import Component1 from './Component1';
import Input from './InputBox'
import Component2 from './Component2'
test('Test React Component',()=>{
  render(<Component1/>)
  const text=screen.getByText('First React Test case');  //screen function kya karta hai jo bhi component humne render kiya uska sara text get karlega
  expect(text).toBeInTheDocument();
})


test('ignore case sensitive testing',()=>{
  render(<Component1/>)
  const text=screen.getByText(/First React Test cAse/i);  
  expect(text).toBeInTheDocument();
})



test('image tag title testing',()=>{
  render(<Component1/>)
  const title=screen.getByTitle(/AI generated/i);  
  expect(title).toBeInTheDocument();
})

test('image tag alt testing',()=>{
  render(<Component1/>)
  const altText=screen.getByAltText(/gallery/i); 
  expect(altText).toBeInTheDocument();
})


test('multiple expect function in one test',()=>{
  render(<Component1/>)
  const altText=screen.getByAltText(/gallery/i);  
  expect(altText).toBeInTheDocument();
  const title=screen.getByTitle(/AI generated/i); 
  expect(title).toBeInTheDocument();
})


test('testing input box exist or not ',()=>{
  render(<Input/>)
   let checkIput=screen.getByRole('textbox')
   expect(checkIput).toBeInTheDocument()
})
test('testing input box placeholder ',()=>{
  render(<Input/>)
   let checkIputPlaceholder=screen.getByPlaceholderText('Enter username')
   expect(checkIputPlaceholder).toBeInTheDocument()
    
})
test('testing input box attributes',()=>{
  render(<Input/>)
   let checkIput=screen.getByRole('textbox')
   expect(checkIput).toHaveAttribute('name','username')
   expect(checkIput).toHaveAttribute('id','yash')
   expect(checkIput).toHaveAttribute('value','yash verma')
})

test('testing input box type',()=>{
  render(<Input/>)
   let checkIput=screen.getByRole('textbox')
   expect(checkIput).toHaveAttribute('type','text')
   
})





describe('UI test Case Group',()=>{
  test('test case 1: testing input box type',()=>{
    render(<Input/>)
     let checkIput=screen.getByRole('textbox')
     expect(checkIput).toHaveAttribute('type','text')
     
  })
  test('test case 2: testing input box attributes',()=>{
    render(<Input/>)
     let checkIput=screen.getByRole('textbox')
     expect(checkIput).toHaveAttribute('name','username')
     expect(checkIput).toHaveAttribute('id','yash')
     expect(checkIput).toHaveAttribute('value','yash verma')
  })
})


describe('API test Case Group',()=>{
  test('test case 1: testing input box type',()=>{
    render(<Input/>)
     let checkIput=screen.getByRole('textbox')
     expect(checkIput).toHaveAttribute('type','text')
     
  })
  test('test case 2: testing input box attributes',()=>{
    render(<Input/>)
     let checkIput=screen.getByRole('textbox')
     expect(checkIput).toHaveAttribute('name','username')
     expect(checkIput).toHaveAttribute('id','yash')
     expect(checkIput).toHaveAttribute('value','yash verma')
  })
})

// describe.only('to call this group only and skip all other tests',()=>{
//   test('test case 1: testing input box type',()=>{
//     render(<Input/>)
//      let checkIput=screen.getByRole('textbox')
//      expect(checkIput).toHaveAttribute('type','text')
     
//   })
//   test('test case 2: testing input box attributes',()=>{
//     render(<Input/>)
//      let checkIput=screen.getByRole('textbox')
//      expect(checkIput).toHaveAttribute('name','username')
//      expect(checkIput).toHaveAttribute('id','yash')
//      expect(checkIput).toHaveAttribute('value','yash verma')
//   })
// })


describe('nested Described',()=>{
  test('test case 1: testing input box type',()=>{
    render(<Input/>)
     let checkIput=screen.getByRole('textbox')
     expect(checkIput).toHaveAttribute('type','text')
     
  })
  test('test case 2: testing input box attributes',()=>{
    render(<Input/>)
     let checkIput=screen.getByRole('textbox')
     expect(checkIput).toHaveAttribute('name','username')
     expect(checkIput).toHaveAttribute('id','yash')
     expect(checkIput).toHaveAttribute('value','yash verma')
  })


  describe('child described',()=>{
    test('test case d1: testing input box type',()=>{
      render(<Input/>)
       let checkIput=screen.getByRole('textbox')
       expect(checkIput).toHaveAttribute('type','text')
       
    })
    test('test case d2: testing input box attributes',()=>{
      render(<Input/>)
       let checkIput=screen.getByRole('textbox')
       expect(checkIput).toHaveAttribute('name','username')
       expect(checkIput).toHaveAttribute('id','yash')
       expect(checkIput).toHaveAttribute('value','yash verma')
    })
  })
})




//Event handling testing
test('input on change event testing',()=>{
  render(<Component2/>)
  let input = screen.getByPlaceholderText('onchange testing');
  fireEvent.change(input,{target:{value:'yash'}})
  expect(input.value).toBe('yash')
})


test('button onclick testing',()=>{
  render(<Component2/>)
  let btn = screen.getByRole ('button');
  fireEvent.click(btn);
  expect(screen.getByText("on click test")).toBeInTheDocument();
})

beforeAll(()=>{
  console.log('run before all tests')
})
beforeEach(()=>{
  console.log('run before every tests')
})
afterAll(()=>{
  console.log('run after all tests')
})
afterEach(()=>{
  console.log('run after every tests')
})



test('snapshot testing for app.js file',()=>{
  const container=render(<Component2/>)
expect(container).toMatchSnapshot();

})