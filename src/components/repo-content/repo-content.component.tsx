import { StarIcon } from "@chakra-ui/icons";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";

interface RepoContentProps {
  name: string;
  description: string;
  stargazers_count: number;
}

const RepoContent: React.FC<RepoContentProps> = ({
  name,
  description = "",
  stargazers_count,
}) => {
  return (
    <Flex justifyContent="space-between" alignItems="flex-start" gap={6}>
      <VStack alignItems="flex-start">
        <Text fontWeight="bold" fontSize="18px">
          {name}
        </Text>
        <Text
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
            wordBreak: "break-word",
          }}
        >
          {description || "No description"}
        </Text>
      </VStack>
      <HStack>
        <Text>{stargazers_count || 0}</Text>
        <StarIcon />
      </HStack>
    </Flex>
  );
};

export default RepoContent;
