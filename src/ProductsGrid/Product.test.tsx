import { render, screen } from "@testing-library/react";
import { Product } from "../contexts/ProductsContext";
import ProductComponent from "./Product";

const {
  id,
  name,
  complianceType: { id: complianceTypeId },
}: Product = {
  id: 929,
  name: "Sparkler Candle",
  complianceType: {
    id: 1,
  },
};

describe("Product Component", () => {
  render(
    <ProductComponent id={id} name={name} complianceTypeId={complianceTypeId} />
  );

  test("displays name", () => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
