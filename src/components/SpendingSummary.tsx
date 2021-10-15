import { Box, Center, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Summary } from "./Summary";
import { Icon } from "@chakra-ui/react";
import {
  BsGearWideConnected,
  BsChevronUp,
  BsChevronDown,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { IoFastFoodSharp } from "react-icons/io5";

interface SpendingSummaryProps {}

export const SpendingSummary: React.FC<SpendingSummaryProps> = ({}) => {
  return (
    <Summary
      title="Spending"
      body="Weekly spending"
      value={142.24}
      icon={BsChevronUp}
      iconColor={"green"}
    >
      <Icon as={IoFastFoodSharp} />
    </Summary>
  );
};
