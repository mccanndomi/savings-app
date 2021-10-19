import React, { Component } from "react";
import { Center, Flex } from "@chakra-ui/react";
import { Link, Redirect } from "react-router-dom";

interface CardProps {
  to: string;
}

export const Card: React.FC<CardProps> = ({ children, to }) => {
  return (
    <Link to={to}>
      <Center
        shadow="lg"
        rounded="3xl"
        backgroundColor="white"
        flexDirection="column"
        padding="8"
      >
        {children}
      </Center>
    </Link>
  );
};
