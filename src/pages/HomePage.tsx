import { Stack, Box, Text, Flex } from "@chakra-ui/layout";
import { HomeSummary } from "../components/HomeSummary";
import React from "react";
import { Avatar, Icon } from "@chakra-ui/react";
import {
  BsGearWideConnected,
  BsChevronUp,
  BsChevronDown,
  BsFillCaretUpFill,
  BsFillCaretDownFill,
} from "react-icons/bs";

function HomePage() {
  return (
    <Stack h="92vh" backgroundColor="gray.20">
      <Box
        pos="fixed"
        zIndex={-1}
        backgroundColor="blue"
        w="100vw"
        h="40vh"
        borderBottomRadius="50"
        backgroundImage="https://i.pinimg.com/736x/3d/3f/85/3d3f85b9670837febfe616e71462534c.jpg"
      />
      <Stack padding="8" spacing="6">
        <Flex justifyContent="flex-end">
          <Icon as={BsGearWideConnected} color="white" w={8} h={8} />
        </Flex>
        <Flex flexDirection="row" paddingBottom="10" paddingTop="10">
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
        <HomeSummary title="Savings" value={10271.31} />
        <HomeSummary
          title="Spending"
          body="Weekly spending"
          value={142.24}
          icon={BsChevronUp}
          iconColor={"green"}
        />
        <HomeSummary
          title="Investment"
          body="Total investment gain"
          value={67.61}
          icon={BsChevronDown}
          iconColor={"red"}
        />
      </Stack>
    </Stack>
  );
}

export default HomePage;
