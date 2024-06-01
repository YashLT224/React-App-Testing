import { fireEvent, render, screen } from '@testing-library/react';
import FunctionalComponent1 from './functionalTesting'
import handleOtherMethod from './helper'

test('method testing functional component way 1',()=>{
    render(<FunctionalComponent1/>);
    const btn= screen.getByTestId('btn1');
    fireEvent.click(btn);
    expect(screen.getByText('hello')).toBeInTheDocument();
})

test('testing functional method outside component',()=>{
    expect(handleOtherMethod()).toMatch(/hi/i)
})

