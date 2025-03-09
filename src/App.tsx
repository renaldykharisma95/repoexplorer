import { Box, Container, VStack } from "@chakra-ui/react";
import IndexProviders from "@providers/index.providers";
import SearchInput from "@components/search-input/search-input.component";
import ListComponent from "@components/list-user/list-user.component";
import DarkModeToggle from "@components/motion-button/motion-button.component";

function App() {
  return (
    <>
      <Box pt={4} pr={4}>
        <DarkModeToggle />
      </Box>
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
    </>
  );
}

export default App;
