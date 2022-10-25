import { render, screen } from "@testing-library/react";
import App from "./app";

test("renders page title", () => {
  render(<App />);
  const mainHeader = screen.getByText(/RESTy/i);
  expect(mainHeader).toBeInTheDocument();
});
