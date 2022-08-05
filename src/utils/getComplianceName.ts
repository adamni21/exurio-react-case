import { ComplianceType, Product } from "../contexts/ProductsContext";

type ComplianceNames = { [complianceId: ComplianceType["id"]]: string };

const complianceNames: ComplianceNames = {
  1: "Mangelfulde produkter",
  2: "Farlige produkter",
};

const getComplianceName = (id: ComplianceType["id"]): string => {
  if (!complianceNames.hasOwnProperty(id)) throw Error("invalid id");
  return complianceNames[id];
};

export default getComplianceName;
