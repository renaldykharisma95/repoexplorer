import { Skeleton, Stack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Stack>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <Skeleton key={idx}></Skeleton>
        ))}
    </Stack>
  );
};

export default Loading;
