import {
  createContext,
  FC,
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import GetProducts from "../api/GetProducts";

export type ComplianceType = { id: number };

export interface Product {
  id: number;
  name: string;
  complianceType: ComplianceType;
}

interface ProductsContext {
  products: Product[];
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  isLoading: boolean;
}

export const ProductsContext = createContext<ProductsContext>({
  products: [],
  searchValue: "",
  setSearchValue(searchValue) {
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    console.log(searchValue);

    GetProducts({ pageSize: 18, searchText: searchValue }).then(({ data }) => {
      setIsLoading(false);
      setProducts(
        data.results.map<Product>(({ id, name, complianceType }) => ({
          id,
          name,
          complianceType,
        }))
      );
      console.log(
        data.results.map<Product>(({ id, name, complianceType }) => ({
          id,
          name,
          complianceType,
        }))
      );
    });
  }, [searchValue]);

  return (
    <ProductsContext.Provider
      value={{ products, searchValue, setSearchValue, isLoading }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
