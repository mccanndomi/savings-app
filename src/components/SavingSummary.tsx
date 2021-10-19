import { Box, Center, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Summary } from "./Summary";
import {
  BsGearWideConnected,
  BsChevronUp,
  BsChevronDown,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { Progress } from "@chakra-ui/react";

interface SavingSummaryProps {}

export const SavingSummary: React.FC<SavingSummaryProps> = ({}) => {
  return (
    <Summary title="Savings" to="/savings" value={10271.31} subValue={16000}>
      <Box w="100%" marginTop="3">
        <Progress
          value={60}
          size="lg"
          colorScheme="green"
          isIndeterminate={false}
          borderRadius="99"
        />
      </Box>
    </Summary>
  );
};
