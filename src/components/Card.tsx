import React, { Component } from "react";
import { Center, Flex } from "@chakra-ui/react";

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Center
      shadow="lg"
      rounded="3xl"
      backgroundColor="white"
      flexDirection="row"
      padding="8"
    >
      {children}
    </Center>
  );
};
