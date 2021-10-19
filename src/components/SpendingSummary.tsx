import { HStack } from "@chakra-ui/layout";
import React from "react";
import { Summary } from "./Summary";
import {
  BsGearWideConnected,
  BsChevronUp,
  BsChevronDown,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import {
  IoFastFoodOutline,
  IoBeerOutline,
  IoCartOutline,
  IoBusOutline,
} from "react-icons/io5";
import { CircularProgressIcon } from "./CircularProgressIcon";

interface SpendingSummaryProps {}

export const SpendingSummary: React.FC<SpendingSummaryProps> = ({}) => {
  return (
    <Summary
      title="Spending"
      body="Weekly spending"
      value={142.24}
      icon={BsChevronUp}
      iconColor={"green"}
      to="/spending"
    >
      <HStack justifyContent="space-evenly" w="100%" paddingTop="1">
        <CircularProgressIcon value={40} icon={IoFastFoodOutline} />
        <CircularProgressIcon value={26} icon={IoBeerOutline} />
        <CircularProgressIcon value={82} icon={IoCartOutline} />
        <CircularProgressIcon value={11} icon={IoBusOutline} />
      </HStack>
    </Summary>
  );
};
