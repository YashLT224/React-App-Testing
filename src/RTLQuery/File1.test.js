import { fireEvent, render, screen ,configure} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import File1 from "./File1";
import File2 from "./File2";
test("get by role- input", () => {
  render(<File1 />);
  const inputField = screen.getByRole("textbox");
  expect(inputField).toBeInTheDocument();
  expect(inputField).toHaveValue("hello");
  expect(inputField).toBeDisabled();
});

test("get by role- button", () => {
  render(<File1 />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test("multiple elements", () => {
  render(<File2 />);
  const button = screen.getByRole("button", { name: "click 1" });
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
  const button2 = screen.getByRole("button", { name: "click 2" });
  expect(button2).toBeInTheDocument();
  const input1 = screen.getByRole("textbox", { name: "UserName" });
  expect(input1).toBeInTheDocument();

  const input2 = screen.getByRole("textbox", { name: "phnno" });
  expect(input2).toBeInTheDocument();
});


test("custom roles ", () => {
    render(<File2 />);
     const dv1= screen.getByRole('dummy')
     expect(dv1).toBeInTheDocument();

  });


test('get All by Role',()=>{
    render(<File2/>);

    const buttons= screen.getAllByRole('button')
    for(let i=0;i<buttons.length;i++){
        expect(buttons[i]).toBeInTheDocument()
    }

    const options=screen.getAllByRole('option')
    for(let i=0;i<options.length;i++){
        expect(options[i]).toBeInTheDocument()
    }
    
})


test('getByLabel',()=>{
    render(<File2/>);
    let input=screen.getByLabelText('studentname');
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('anil')


    let checkbox=screen.getByLabelText('skills');
    expect(checkbox).toBeInTheDocument()
     expect(checkbox).toBeChecked()
})



test('getAllByLabelText',()=>{
    render(<File2/>)
    const inputs=screen.getAllByLabelText('a1')
    for(let i=0;i<inputs.length;i++){
        expect(inputs[i]).toBeInTheDocument()
        expect(inputs[i]).toHaveValue(`a${i+1}`)
    }

    const checkboxes=screen.getAllByLabelText('c1')
    for(let i=0;i<checkboxes.length;i++){
        expect(checkboxes[i]).toBeInTheDocument()
        expect(checkboxes[i]).toBeChecked()
    }

})


test('getbyPlaceholderText',()=>{
    render(<File2/>)
    let input= screen.getByPlaceholderText('testing');
    expect(input).toBeInTheDocument()

    let inputs= screen.getAllByPlaceholderText('testingg');
    for(let i=0;i<inputs.length;i++){
        expect(inputs[i]).toBeInTheDocument()
    }
   
})

test('getBytext',()=>{
    render(<File2/>)
    let button=screen.getByText('login')
    expect(button).toBeInTheDocument()
})

test('p tag testing',()=>{
    render(<File2/>)
    let PTag=screen.getByText('P tag testing')
    expect(PTag).toBeInTheDocument()
    expect(PTag).toHaveClass('para')
    expect(PTag).toHaveAttribute('class')

    let PTags=screen.getAllByText('multiple P tag testing')
    for(let i=0;i<PTags.length;i++){
        expect(PTags[i]).toBeInTheDocument()
    }
})



test('getBy TestId testing',()=>{
    render(<File2/>)
    let divId=screen.getByTestId('div-test-id')
    expect(divId).toBeInTheDocument()
   

    let testids=screen.getAllByTestId('div-multiple-test-id')
    for(let i=0;i<testids.length;i++){
        expect(testids[i]).toBeInTheDocument()
     }
})



   
  
test('test div with element-id', () => {
    configure({ testIdAttribute: 'element-id' });
    render(<File1 />);
    const divElement = screen.getByTestId('override-id');
     expect(divElement).toBeInTheDocument();
});


test('testing with getbydisplayvalue',()=>{
    render(<File2/>)
    const input= screen.getByDisplayValue('GetByDisplayValue')
    expect(input).toBeInTheDocument()

    const textarea= screen.getByDisplayValue('textareaGetByDisplayValue')
    expect(textarea).toBeInTheDocument()


    const multipleelements=screen.getAllByDisplayValue('multipleGetByDisplayValue')
    for(let i=0;i<multipleelements.length;i++){
        expect(multipleelements[i]).toBeInTheDocument()
     }
})

test('getby title testing',()=>{
    render(<File2/>)
    const btn= screen.getByTitle('clickme');
    expect(btn).toBeInTheDocument()

    const span= screen.getByTitle('black spade suit');
    expect(span).toBeInTheDocument()


    const spans= screen.getAllByTitle('black spade suits');
    for(let i=0;i<spans.length;i++){
        expect(spans[i]).toBeInTheDocument()
     }
   
})

test('get by alt text testing',()=>{
    render(<File2/>)
    const img= screen.getByAltText('scenery');
    expect(img).toBeInTheDocument()

    const images= screen.getAllByAltText('scenery2');
    for(let i=0;i<images.length;i++){
        expect(images[i]).toBeInTheDocument()
     }
})

 