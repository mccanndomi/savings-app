import React from "react";
import { Link } from "react-router-dom";
import { HStack, Box } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {
  BsPiggyBank,
  BsHouseDoor,
  BsCashStack,
  BsBarChart,
} from "react-icons/bs";

interface MenuBarProps {}

export const MenuBar: React.FC<MenuBarProps> = () => {
  return (
    <HStack justifyContent="space-evenly" h="8vh" shadow="2xl">
      <Link to="/">
        <Icon
          as={BsHouseDoor}
          w={8}
          h={8}
          color={true ? "#B09479" : "lightgrey"}
        />
      </Link>
      <Link to="/savings">
        <Icon as={BsPiggyBank} w={8} h={8} color="lightgrey" />
      </Link>
      <Link to="/spending">
        <Icon as={BsCashStack} w={8} h={8} color="lightgrey" />
      </Link>
      <Link to="/investing">
        <Icon as={BsBarChart} w={8} h={8} color="lightgrey" />
      </Link>
    </HStack>
  );
};
