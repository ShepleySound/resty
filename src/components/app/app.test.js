import { render, screen } from "@testing-library/react";
import App from "./index";

test("renders section headers", () => {
  render(<App />);
  const requestHeader = screen.getByText(/Request/i);
  expect(requestHeader).toBeInTheDocument();
  const responseHeader = screen.getByText(/Response/i);
  expect(responseHeader).toBeInTheDocument();
});
