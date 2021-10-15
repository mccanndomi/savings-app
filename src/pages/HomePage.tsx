import { Stack, Box, Text, Flex } from "@chakra-ui/layout";
import { Summary } from "../components/Summary";
import { SpendingSummary } from "../components/SpendingSummary";
import React from "react";
import { Icon } from "@chakra-ui/react";
import {
  BsGearWideConnected,
  BsChevronUp,
  BsChevronDown,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { SavingSummary } from "../components/SavingSummary";
import { InvestingSummary } from "../components/InvestingSummary";
import { WelcomHeader } from "../components/WelcomeHeader";

function HomePage() {
  return (
    <Stack h="92vh" backgroundColor="gray.20">
      <Box
        pos="fixed"
        zIndex={-1}
        backgroundColor="blue"
        w="100vw"
        h="40vh"
        borderBottomRadius="50"
        backgroundImage="https://i.pinimg.com/736x/3d/3f/85/3d3f85b9670837febfe616e71462534c.jpg"
      />
      <Stack padding="8" spacing="6">
        <Flex justifyContent="flex-end">
          <Icon as={BsGearWideConnected} color="white" w={8} h={8} />
        </Flex>
        <WelcomHeader />
        <SavingSummary />
        <SpendingSummary />
        <InvestingSummary />
      </Stack>
    </Stack>
  );
}

export default HomePage;
