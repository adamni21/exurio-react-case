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
  isLoading: boolean;
}

export const ProductsContext = createContext<ProductsContext>({
  products: [],
  isLoading: true,
});

interface Props {
  children?: ReactNode;
}

const ProductsProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    GetProducts({ pageSize: 18 }).then(({ data }) => {
      setIsLoading(false);
      setProducts(
        data.results.map<Product>(({ id, name, complianceType }) => ({
          id,
          name,
          complianceType,
        }))
      );
    });
  }, []);
  return (
    <ProductsContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
