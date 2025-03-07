import { Heading, Image, VStack } from "@chakra-ui/react";
import notfound from "@assets/notfound.webp";
import error from "@assets/404.webp";

type EmptyStateProps = {
  isError?: boolean;
  size: string;
};

const EmptyState: React.FC<EmptyStateProps> = ({ isError, size }) => {
  return (
    <VStack>
      <Image
        h={size}
        w={size}
        src={!!isError ? error : notfound}
        alt="not-found"
      />
      <Heading as="h2">{!!isError ? "" : "Data is Not Found"}</Heading>
    </VStack>
  );
};

export default EmptyState;
