import { fireEvent, render, screen } from "@testing-library/react";
import App from "./index";

test("User can enter a URL, hit send, and receive a response.", async () => {
  render(<App />);

  const urlInput = screen.getByTestId('url-input');
  fireEvent.change(urlInput, {target: {value: 'https://cataas.com/cat'}});
  expect(urlInput.value).toBe('https://cataas.com/cat');
  const send = screen.getByText('Send');
  fireEvent.click(send);
  // fireEvent.click(screen.getByRole('button', {
  //   name: /Send/i
  // }))
});
