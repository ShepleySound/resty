import { render, screen } from "@testing-library/react";
import Header from "./index";

test("renders page title", () => {
  render(<Header />);
  const mainHeader = screen.getByRole('banner');
  expect(mainHeader).toBeInTheDocument();
});
