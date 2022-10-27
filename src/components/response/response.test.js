import { render, screen } from "@testing-library/react";
import Response from "./index";

test("Renders section headers", () => {
  render(<Response />);
  const responseHeader = screen.getByText(/Response/i);
  expect(responseHeader).toBeInTheDocument();
});

test("Response box displays data passed into the component when not in a loading state", () => {
  const dataProps = {
    "data": "A response from an API",
    "headers": {
      "content-type": "application/json"
    }
  }
  render(<Response loading={false} data={dataProps}/>)
  const responseBody = screen.getByText(/A response from an API/i)
  expect(responseBody).toBeInTheDocument();
})

test("Response box only displays loading when in a loading state", () => {
  const dataProps = {
    "data": "A response from an API",
    "headers": {
      "content-type": "application/json"
    }
  }
  render(<Response loading={true} data={dataProps}/>)
  const responseBody = screen.queryByText(/A response from an API/i)
  expect(responseBody).not.toBeInTheDocument();
})
