import React from "react";
import {
  CircularProgress,
  CircularProgressLabel,
  Icon,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface CircularProgressIconProps {
  value?: number;
  icon?: IconType;
}

export const CircularProgressIcon: React.FC<CircularProgressIconProps> = ({
  value,
  icon,
}) => {
  return (
    <CircularProgress
      value={value}
      color="#3B6B60"
      thickness="5px"
      borderRadius="100"
      isIndeterminate={false}
    >
      <CircularProgressLabel>
        <Icon color="#B09479" w="5" h="5" as={icon} />
      </CircularProgressLabel>
    </CircularProgress>
  );
};
