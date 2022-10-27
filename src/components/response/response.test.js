import { render, screen } from "@testing-library/react";
import Response from "./index";

test("renders section headers", () => {
  render(<Response />);
  const responseHeader = screen.getByText(/Response/i);
  expect(responseHeader).toBeInTheDocument();
});
