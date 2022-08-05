import { Input, Stack } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import {
  ChangeEvent,
  ChangeEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const ProductsFilter = () => {
  const ctx = useContext(ProductsContext);
  const [searchValue, setSearchValue] = useState(ctx.searchValue);
  const [debounced] = useDebouncedValue(searchValue, 500);

  useEffect(() => {
    ctx.setSearchValue(debounced);
  }, [debounced]);

  const searchChangeHandler: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setSearchValue(target.value);

  return (
    <Stack>
      <Input
        value={searchValue}
        placeholder="Leder efter produkter"
        onChange={searchChangeHandler}
      />
    </Stack>
  );
};

export default ProductsFilter;
