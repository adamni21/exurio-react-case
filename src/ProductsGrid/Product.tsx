import {
  AspectRatio,
  Badge,
  Card,
  Text,
  Image,
  Space,
  BackgroundImage,
  Container,
} from "@mantine/core";
import { FC } from "react";
import { ApiBaseUrl } from "../Constants";
import getComplianceName from "../utils/getComplianceName";

interface Props {
  id: number;
  name: string;
  complianceTypeId: number;
}

const Product: FC<Props> = ({ id, name, complianceTypeId }) => {
  return (
    <Card>
      <Card.Section>
        <AspectRatio ratio={4 / 3}>
          <Image
            src={`${ApiBaseUrl}/picture/${id}`}
            alt={`produktbillede af ${name}`}
            fit="cover"
            style={{ backgroundColor: "#222" }}
            withPlaceholder
          />
        </AspectRatio>
      </Card.Section>
      <Space h="md" />
      <Badge>{getComplianceName(complianceTypeId)}</Badge>
      <Text size="xl">{name}</Text>
    </Card>
  );
};

export default Product;
