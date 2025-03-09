import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionIconButton = motion(IconButton);

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <MotionIconButton
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
      as={motion.button}
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: colorMode === "light" ? 0 : 180 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  );
}
