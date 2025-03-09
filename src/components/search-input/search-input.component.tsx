import { Button, Input, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { IndexContext, IndexContextProps } from "@providers/index.providers";

const SearchInput: React.FC = () => {
  const { valueSearch, setValueSearch, refetch } =
    useContext<IndexContextProps>(IndexContext);
  return (
    <>
      <Input
        size="lg"
        placeholder="Enter username"
        value={valueSearch}
        onChange={(e) => {
          if (setValueSearch && e) setValueSearch(e.target.value);
        }}
      />
      <Button
        role="button"
        onClick={() => {
          refetch();
        }}
        colorScheme="blue"
        w="100%"
      >
        Search
      </Button>
      {valueSearch ? (
        <Text alignSelf="flex-start">
          Showing users for {`"${valueSearch}"`}
        </Text>
      ) : null}
    </>
  );
};

export default SearchInput;
