import {
  Box,
  Container,
  IconButton,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import IndexProviders from "@providers/index.providers";
import SearchInput from "@components/search-input/search-input.component";
import ListComponent from "@components/list-user/list-user.component";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        float="right"
        aria-label="Toggle Dark Mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        bg={useColorModeValue("gray.300", "gray.700")}
        color={useColorModeValue("black", "white")}
        _hover={{ bg: useColorModeValue("gray.300", "gray.600") }}
        _focus={{ outline: "none", boxShadow: "0 0 0 2px #3182ce" }}
        _active={{ bg: useColorModeValue("gray.400", "gray.500") }}
        borderRadius="sm"
        boxShadow="md"
      />
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
