import { fireEvent, render, screen } from "@testing-library/react";
import Assertion1 from "./Assertion1";
test("test input positive cases", () => {
  render(<Assertion1 />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue();
  expect(input).toHaveValue("anil sidhu");
  expect(input).toBeEnabled();
  //expect (input).toBeDisabled()
  expect(input).toHaveAttribute("id");
  expect(input).toHaveAttribute("data-test");
  expect(input).toHaveAttribute("class");
  expect(input).toHaveClass("test-style");
});

test("test input negative cases", () => {
  render(<Assertion1 />);
  const btn = screen.getByRole("button");
  // expect(btn).not.toBeInTheDocument()
  //   expect(btn).not.toHaveClass("btn");
  // expect(btn).not.toHaveAttribute('id')
  expect(btn).not.toHaveAttribute("data-test");
  expect(btn).not.toBeDisabled();
});

test('text match with string',()=>{
    render(<Assertion1 />);
    const div= screen.getByText('hELlo world',{exact:false})
    expect(div).toBeInTheDocument()
})

test('text match with regex',()=>{
    render(<Assertion1 />);
    const div= screen.getByText(/hello/)
    expect(div).toBeInTheDocument()

    const div2= screen.getByText(/ello/)
    expect(div2).toBeInTheDocument()

    const div3= screen.getByText(/eLLo/i)
    expect(div3).toBeInTheDocument()

    const div4= screen.getByText(/Hello w?orld/i) //ignore w if present or not it will ignore -> Hello orld is passed 
    expect(div4).toBeInTheDocument()
})