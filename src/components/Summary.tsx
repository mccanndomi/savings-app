import { Box, Center, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { Card } from "./Card";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface SummaryProps {
  title: string;
  body?: string;
  value?: number;
  subValue?: number;
  icon?: IconType;
  iconColor?: string;
  to: string;
}

export const Summary: React.FC<SummaryProps> = ({
  title,
  body,
  value,
  subValue,
  icon,
  iconColor,
  children,
  to,
}) => {
  return (
    <Card to={to}>
      <Flex w="100%" flexDirection="row">
        <Flex flexDirection="column">
          <Text fontWeight="bold" fontSize="20">
            {title}
          </Text>
          {body && <Text color="grey">{body}</Text>}
        </Flex>
        <Flex flex="1" justifyContent="flex-end">
          {value && (
            <>
              {icon && (
                <Icon as={icon} color={iconColor} marginRight="1" w={6} h={6} />
              )}
              <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Text fontWeight="bold" fontSize="18">
                  {"$" + value}
                </Text>
                {subValue && (
                  <Text fontSize="18" color="grey" borderTopWidth="1px">
                    {"$" + subValue}
                  </Text>
                )}
              </Box>
            </>
          )}
        </Flex>
      </Flex>
      <Flex w="100%">{children}</Flex>
    </Card>
  );
};
