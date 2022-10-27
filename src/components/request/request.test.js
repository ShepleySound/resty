import { render, screen } from "@testing-library/react";
import Request from "./index";

test("renders section headers", () => {
  render(<Request />);
  const requestHeader = screen.getByText(/Request/i);
  expect(requestHeader).toBeInTheDocument();

});
