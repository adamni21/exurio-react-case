import { Checkbox, Input, Stack } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { ChangeEventHandler, useContext, useEffect, useState } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import getComplianceName from "../utils/getComplianceName";

const ProductsFilter = () => {
  const ctx = useContext(ProductsContext);
  const [searchValue, setSearchValue] = useState(ctx.searchValue);
  const [debouncedSearch] = useDebouncedValue(searchValue, 500);
  const [complianceIds, setComplianceIds] = useState(
    ctx.complianceIds.map((id) => String(id))
  );

  useEffect(() => {
    ctx.setSearchValue(debouncedSearch);
  }, [debouncedSearch]);

  const searchChangeHandler: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setSearchValue(target.value);

  const complianceChangeHandler = (value: string[]) => {
    setComplianceIds(value);
    ctx.setComplianceIds(value.map((id) => Number(id)));
  };

  return (
    <Stack>
      <Input
        value={searchValue}
        placeholder="Leder efter produkter"
        onChange={searchChangeHandler}
      />
      <Checkbox.Group
        value={complianceIds}
        onChange={complianceChangeHandler}
        orientation="vertical"
        label="Filtrer på produkttype"
      >
        <Checkbox value="1" label={getComplianceName(1)} />
        <Checkbox value="2" label={getComplianceName(2)} />
      </Checkbox.Group>
    </Stack>
  );
};

export default ProductsFilter;
