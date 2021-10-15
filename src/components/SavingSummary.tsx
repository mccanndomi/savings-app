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

interface SavingSummaryProps {}

export const SavingSummary: React.FC<SavingSummaryProps> = ({}) => {
  return <Summary title="Savings" value={10271.31} />;
};
