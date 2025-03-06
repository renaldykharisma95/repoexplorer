import { Box, Container, VStack } from "@chakra-ui/react";
import "./App.css";
import SearchInput from "./components/search-input/search-input.component";
import IndexProviders from "./providers/index.providers";
import ListComponent from "./components/list-user/list-component.component";

function App() {
  return (
    <Container maxW="container.lg" pt={24}>
      <VStack>
        <IndexProviders>
          <SearchInput />
          <Box pt={12} w="100%">
            <ListComponent />
          </Box>
        </IndexProviders>
      </VStack>
    </Container>
  );
}

export default App;
