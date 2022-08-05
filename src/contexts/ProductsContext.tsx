import { createContext, FC, ReactNode, useEffect, useState } from "react";
import GetProducts from "../api/GetProducts";

export type ComplianceType = { id: number };
export type ComplianceTypeId = ComplianceType["id"];

export interface Product {
  id: number;
  name: string;
  complianceType: ComplianceType;
}

interface ProductsContext {
  products: Product[];
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  complianceIds: ComplianceTypeId[];
  setComplianceIds: (complianceId: ComplianceTypeId[]) => void;
  isLoading: boolean;
}

export const ProductsContext = createContext<ProductsContext>({
  products: [],
  searchValue: "",
  setSearchValue(searchValue) {
    return;
  },
  complianceIds: [],
  setComplianceIds(complianceId) {
    return;
  },
  isLoading: true,
});

interface Props {
  children?: ReactNode;
}

const ProductsProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [complianceIds, setComplianceIds] = useState<ComplianceTypeId[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    GetProducts({
      pageSize: 18,
      searchText: searchValue,
      complianceTypeIds: complianceIds,
    }).then(({ data }) => {
      setIsLoading(false);
      setProducts(
        data.results.map<Product>(({ id, name, complianceType }) => ({
          id,
          name,
          complianceType,
        }))
      );
    });
  }, [searchValue, complianceIds]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        searchValue,
        setSearchValue,
        complianceIds,
        setComplianceIds,
        isLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
