import { fireEvent, render, screen ,configure} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // For jest-dom matchers
import APITest from './ApiCall'
test('heading test',()=>{
    render(<APITest/>)
    const heading= screen.getByText('list of users')
    expect(heading).toBeInTheDocument()
})

// test('render test for real api testing',async()=>{
//     render(<APITest/>)
//     const el= await screen.findAllByRole('listitem', {}, { timeout: 2000 });
//     expect(el).toHaveLength(10)
// })

// test('render test for mock api testing',async()=>{
//     render(<APITest/>)
//     const el= await screen.findAllByRole('listitem', {}, { timeout: 2000 });
//     expect(el).toHaveLength(4)
// })


it('should return true when input is valid', () => {
    render(<APITest/>)
    const heading= screen.getByText('list of users')
    expect(heading).toBeInTheDocument()
  });
  