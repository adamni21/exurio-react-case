import { SimpleGrid } from "@mantine/core";
import { FC, useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import Product from "./Product";

const ProductsGrid: FC = () => {
  const products = useContext(ProductsContext);
  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 2 }]}>
      {products.map(({ id, name, complianceType }) => (
        <Product
          key={id}
          id={id}
          name={name}
          complianceTypeId={complianceType.id}
        />
      ))}
    </SimpleGrid>
  );
};

export default ProductsGrid;
