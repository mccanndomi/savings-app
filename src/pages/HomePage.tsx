import { Stack, Box, Text, Flex, Spacer } from "@chakra-ui/layout";
import { Summary } from "../components/Summary";
import { SpendingSummary } from "../components/SpendingSummary";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import {
  BsGearWideConnected,
  BsChevronUp,
  BsChevronDown,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { SavingSummary } from "../components/SavingSummary";
import { InvestingSummary } from "../components/InvestingSummary";
import { WelcomHeader } from "../components/WelcomeHeader";
import headerLight from "../res/light.svg";
import headerDark from "../res/dark.svg";

function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack backgroundColor="gray.20" h="100vh" overflow="scroll">
      <Box
        pos="fixed"
        zIndex={-1}
        w="100vw"
        h="40vh"
        borderBottomRadius="50"
        backgroundColor="#273e73"
        // backgroundImage="https://i.pinimg.com/736x/3d/3f/85/3d3f85b9670837febfe616e71462534c.jpg"
        backgroundImage={headerLight}
        backgroundSize="cover"
      />
      <Stack padding="5" spacing="6">
        <Flex justifyContent="flex-end">
          <Icon
            onClick={onOpen}
            as={BsGearWideConnected}
            color="white"
            w={6}
            h={6}
          />
        </Flex>
        <WelcomHeader />
        <SavingSummary />
        <SpendingSummary />
        <InvestingSummary />
        <SpendingSummary />
        <SpendingSummary />
      </Stack>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Settings</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}

export default HomePage;
