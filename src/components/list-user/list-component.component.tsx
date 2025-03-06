import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
  Heading,
} from "@chakra-ui/react";

const ListComponent = () => {
  return (
    <Accordion>
      <AccordionItem>
        <Heading as="h2">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
      </AccordionItem>
    </Accordion>
  );
};

export default ListComponent;
