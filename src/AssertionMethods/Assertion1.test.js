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
