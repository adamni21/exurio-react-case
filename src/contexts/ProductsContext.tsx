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
export const ProductsContext = createContext<Product[]>([]);

interface Props {
  children?: ReactNode;
}

const ProductsProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    GetProducts({ pageSize: 18 }).then(({ data }) => {
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
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
