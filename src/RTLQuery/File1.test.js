import { fireEvent, render, screen } from '@testing-library/react';
import File1 from './File1'
test('get by role',()=>{
render(<File1/>)
const inputField= screen.getByRole('textbox');
expect(inputField).toBeInTheDocument()


})