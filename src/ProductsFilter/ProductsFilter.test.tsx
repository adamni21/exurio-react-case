import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductsFilter from "./ProductsFilter";

describe("ProductsFilter", () => {
  test("search input update value", async () => {
    const user = userEvent.setup();
    render(<ProductsFilter />);

    const searchValue = "Keyboard";
    const searchInputElem = await screen.findByPlaceholderText(
      "leder efter produkter",
      { exact: false }
    );

    await user.click(searchInputElem);
    await user.keyboard(searchValue);

    expect(searchInputElem).toHaveValue(searchValue);
  });
});
