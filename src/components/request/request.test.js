import { render, screen } from "@testing-library/react";
import Request from "./index";

test("renders section headers", () => {
  render(<Request currentRequest={
    {
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon/ditto',
      body: '',
    }
  }/>);
  const requestHeader = screen.getByText(/Request/i);
  expect(requestHeader).toBeInTheDocument();

});
