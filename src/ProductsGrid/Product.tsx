import { Badge, Card, Text } from "@mantine/core";
import { FC } from "react";
import getComplianceName from "../utils/getComplianceName";

interface Props {
  id: number;
  name: string;
  complianceTypeId: number;
}

const Product: FC<Props> = ({ id, name, complianceTypeId }) => {
  return (
    <Card>
      <Badge>{getComplianceName(complianceTypeId)}</Badge>
      <Text size="xl">{name}</Text>
    </Card>
  );
};

export default Product;
