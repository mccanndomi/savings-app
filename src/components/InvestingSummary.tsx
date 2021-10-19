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
import { StockPreview } from "./StockPreview";

interface InvestingSummaryProps {}

export const InvestingSummary: React.FC<InvestingSummaryProps> = ({}) => {
  return (
    <Summary
      title="Investment"
      body="Total investment gain"
      value={67.61}
      icon={BsChevronDown}
      iconColor={"red"}
      to="/investing"
    >
      <StockPreview />
    </Summary>
  );
};
