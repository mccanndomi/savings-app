import { Box, Center, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Card } from "./Card";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface HomeSummaryProps {
  title: string;
  body?: string;
  value?: number;
  icon?: IconType;
  iconColor?: string;
}

export const HomeSummary: React.FC<HomeSummaryProps> = ({
  title,
  body,
  value,
  icon,
  iconColor,
}) => {
  return (
    <Card>
      <Box>
        <Text fontWeight="bold" fontSize="20">
          {title}
        </Text>
        {body && <Text color="grey">{body}</Text>}
      </Box>
      <Flex flex="1" h="100%" justifyContent="flex-end">
        {value && (
          <>
            {icon && (
              <Icon as={icon} color={iconColor} marginRight="1" w={6} h={6} />
            )}
            <Text fontWeight="bold" fontSize="18">
              {"$" + value}
            </Text>
          </>
        )}
      </Flex>
    </Card>
  );
};
