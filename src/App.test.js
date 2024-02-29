import { render, screen } from "@testing-library/react";
import App from "./App";

test("render telr app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact/);
  expect(linkElement).toBeInTheDocument();
});
