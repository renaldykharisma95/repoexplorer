import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { IndexContext } from "../../providers/index.providers";
import RepoContent from "../repo-content/repo-content.component";
import Loading from "../loading/loading.component";
import EmptyState from "../empty-state/empty-state.compionent";
import { ListUserInterface } from "../../interfaces/list-user.interface";
import { DataRepoInterface } from "../../interfaces/list-repo.interface";

const ListComponent = () => {
  const {
    listUserData,
    listRepoData,
    isErrorRepo,
    isErrorUser,
    isUserLoading,
    isRepoLoading,
    setUser,
    valueSubmitSearch,
  } = useContext(IndexContext);

  const bgColor = useColorModeValue("gray.200", "gray.900");

  return (
    <Accordion allowToggle>
      {isUserLoading ? (
        <Loading />
      ) : (
        <>
          {!listUserData.length && !!valueSubmitSearch ? (
            <Flex justifyContent="center" alignItems="center">
              <EmptyState size="md" isError={isErrorUser} />
            </Flex>
          ) : (
            listUserData.map((item: ListUserInterface, idx: number) => (
              <AccordionItem
                key={idx}
                my={5}
                border="1px solid gray"
                borderRadius={6}
              >
                <Heading as="h2">
                  <AccordionButton onClick={() => setUser(item.login)}>
                    <Box as="span" flex="1" textAlign="left">
                      {item.login}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <>
                    {isRepoLoading ? (
                      <Loading />
                    ) : (
                      <>
                        {!isErrorRepo && listRepoData.length > 0 ? (
                          listRepoData.map(
                            (repo: DataRepoInterface, idx: number) => (
                              <Box
                                key={idx}
                                h="150px"
                                bgColor={bgColor}
                                p={4}
                                my={4}
                                boxShadow="sm"
                              >
                                <RepoContent {...repo} />
                              </Box>
                            )
                          )
                        ) : (
                          <EmptyState size="xs" isError={isErrorRepo} />
                        )}
                      </>
                    )}
                  </>
                </AccordionPanel>
              </AccordionItem>
            ))
          )}
        </>
      )}
    </Accordion>
  );
};

export default ListComponent;
