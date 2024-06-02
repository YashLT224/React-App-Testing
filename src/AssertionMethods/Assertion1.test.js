import { fireEvent, render, screen } from '@testing-library/react';
import Assertion1 from  './Assertion1'
test('test input',()=>{
render(<Assertion1/>)
const input=screen.getByRole('textbox');
expect(input).toBeInTheDocument()
expect(input).toHaveValue();
expect(input).toHaveValue('anil sidhu');
expect (input).toBeEnabled()
//expect (input).toBeDisabled()
expect(input).toHaveAttribute('id')
expect(input).toHaveAttribute('data-test')
})