import React from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Icon,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface StockPreviewProps {
  value?: number;
  icon?: IconType;
}

export const StockPreview: React.FC<StockPreviewProps> = ({ value, icon }) => {
  return <Box>Dow</Box>;
};
