import { fireEvent, render, screen, within, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import userEvent from "@testing-library/user-event";
import Assertion1 from "./Assertion1";
import Assertion2 from "./Assertion2";
import PropsTesting from "./PropsTesting";
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

test("text match with string", () => {
  render(<Assertion1 />);
  const div = screen.getByText("hELlo world", { exact: false });
  expect(div).toBeInTheDocument();
});

test("text match with regex", () => {
  render(<Assertion1 />);
  const div = screen.getByText(/hello/);
  expect(div).toBeInTheDocument();

  const div2 = screen.getByText(/ello/);
  expect(div2).toBeInTheDocument();

  const div3 = screen.getByText(/eLLo/i);
  expect(div3).toBeInTheDocument();

  const div4 = screen.getByText(/Hello w?orld/i); //ignore w if present or not it will ignore -> Hello orld is passed
  expect(div4).toBeInTheDocument();
});

test("text match with function", () => {
  render(<Assertion1 />);
  const div = screen.getByText((content, element) =>
    content.startsWith("hello")
  );
  expect(div).toBeInTheDocument();
  const div2 = screen.getByText((content, element) =>
    content.endsWith("world")
  );
  expect(div2).toBeInTheDocument();
  const div3 = screen.getByText((content, element) => content.endsWith("ld"));
  expect(div3).toBeInTheDocument();

  const div4 = screen.getByText((content, element) => {
    return content.includes("ld");
  });
  expect(div4).toBeInTheDocument();

  const div5 = screen.getAllByText((content, element) => {
    return true;
  });
  expect(div5[0]).toBeInTheDocument();

  //  const div=screen.getAllByText((content,element)=>{
  //     return content.length==11
  //  })
  //  expect(div6).toBeInTheDocument()
});

test("query base testing", () => {
  render(<Assertion2 />);
  const div = screen.getByText("logout");
  expect(div).toBeInTheDocument();

  const div1 = screen.queryByText("logout");
  expect(div1).toBeInTheDocument();

  // const div2= screen.getByText('login');// getBy Text se wo elelent ko dhund hi nai pa rha
  const div2 = screen.queryByText("login"); //isme use ye pta chal gaya ki code me wo element kahi na kahi toh h and and usn dhund liya
  expect(div2).not.toBeInTheDocument();
});

test("testing with findBy", async () => {
  render(<Assertion2 />);
  // const div= screen.getByText('data found')
  // expect(div).toBeInTheDocument()

  const div1 = await screen.findByText("data found", {}, { timeout: 2000 });
  expect(div1).toBeInTheDocument();
});

test("test case with javascript custom query", () => {
  render(<Assertion2 />);
  const element = document.querySelector("#testid");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("hello yash");
});

test("testing with querying within elements", () => {
  render(<Assertion2 />);
  let el = screen.getByText("Hello world");
  expect(el).toBeInTheDocument();

  let subEl = within(el).getByText("lorum");
  expect(subEl).toBeInTheDocument();

  let subEl2 = within(el).getByText("ipsum");
  expect(subEl2).toBeInTheDocument();
});

test("click event with user event library", async () => {
  userEvent.setup();
  render(<Assertion2 />);
  const btn = screen.getByText("clickme");
  await userEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument();
});

test("On change Event tetsting", async () => {
  userEvent.setup();
  render(<Assertion2 />);
  let el = screen.getByRole("textbox");
  await userEvent.type(el, "anil");
  expect(screen.getByText("anil")).toBeInTheDocument();
});

test("act function", async () => {
  userEvent.setup();
  render(<Assertion2 />);
  const input = screen.getByRole("textbox");

  await act(async () => {
    await userEvent.type(input, "anil");
  });

  expect(screen.getByText("anil")).toBeInTheDocument();
});

test("props testing", () => {
  render(<PropsTesting name="tony" />);
  const user = screen.getByText("tony");
  expect(user).toBeInTheDocument();
});

test("functional props testing", async () => {
  userEvent.setup();
  const testFunction = jest.fn(); // funcion mocking
  render(<PropsTesting name="tony" testFunction={testFunction} />);
  const btn = screen.getByRole("button");
  await userEvent.click(btn);
  expect(testFunction).toBeCalled();
});
