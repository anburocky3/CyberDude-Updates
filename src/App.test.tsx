import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("App.tsx", () => {
  it("full app rendering/navigating", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const text = "Suggestions";

    const view = await screen.findByText(text);
    expect(view.innerHTML).toBe(text);
  });
});
