import { Loader, SimpleGrid, Stack } from "@mantine/core";
import { FC, useContext, useState } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import Product from "./Product";

const ProductsGrid: FC = () => {
  const { products, isLoading } = useContext(ProductsContext);

  if (isLoading)
    return (
      <Stack align="center" justify="center" sx={(theme) => ({ height: 400 })}>
        <Loader size="xl" />
      </Stack>
    );

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
