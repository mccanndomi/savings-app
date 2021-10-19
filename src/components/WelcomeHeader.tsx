import { Box, Center, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Avatar, Icon } from "@chakra-ui/react";

interface WelcomHeaderProps {}

export const WelcomHeader: React.FC<WelcomHeaderProps> = ({}) => {
  return (
    <Flex flexDirection="row" paddingBottom="8" paddingTop="2">
      <Avatar
        size="lg"
        name="Dom McCann"
        src="https://scontent.fakl2-1.fna.fbcdn.net/v/t1.6435-9/31841666_1843726695677971_50277217879457792_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Tdv6fNfg1e4AX85jzQj&_nc_ht=scontent.fakl2-1.fna&oh=af446b87d273712c9425ed7bee29f7da&oe=618F7089"
      />
      <Box marginLeft="6">
        <Text color="white">Welcome back,</Text>
        <Text fontWeight="bold" fontSize="3xl" color="white" lineHeight="8">
          Dom McCann
        </Text>
      </Box>
    </Flex>
  );
};
