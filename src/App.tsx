import {
  MantineProvider,
  Text,
  AppShell,
  Header,
  MediaQuery,
  Burger,
  Navbar,
} from "@mantine/core";
import { useState } from "react";
import { theme } from "./theme";
import ProductsProvider from "./contexts/ProductsContext";
import ProductsGrid from "./ProductsGrid/ProductsGrid";
import ProductsFilter from "./ProductsFilter/ProductsFilter";

export default function App() {
  const [opened, setOpened] = useState(false);
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <ProductsProvider>
        <AppShell
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={
            <Navbar
              p="md"
              hiddenBreakpoint="sm"
              hidden={opened}
              width={{ sm: 200, md: 230, lg: 300 }}
            >
              <ProductsFilter />
            </Navbar>
          }
          header={
            <Header height={75} p="sm">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    mr="xl"
                  />
                </MediaQuery>
                <Text size="xl" weight="bold">
                  Se farlige og mangelfulde produkter
                </Text>
              </div>
            </Header>
          }
        >
          <ProductsGrid />
        </AppShell>
      </ProductsProvider>
    </MantineProvider>
  );
}
