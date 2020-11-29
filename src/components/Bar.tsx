import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { colors } from "../theme";

const MenuItems: React.FC<unknown> = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

type BarProps = {
  reportActive?: boolean;
};

export const Bar: React.FC<BarProps> = ({ reportActive }) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      position="fixed"
      bottom="0"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0 1rem"
      bg="transparent"
      color={colors.BLACK}
      width="100%"
    >
      <Box
        position="absolute"
        bottom="0"
        left="0"
        bg={colors.WHITE}
        width="100%"
        height="72px"
        zIndex="-1"
      />
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        pt="1.5rem"
      >
        <NavLink
          to="/stats"
          activeClassName="is-active"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center ",
          }}
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/stats.svg`}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Logo"
            sizes="30"
          />
          <Text fontSize="xs">Statystyki</Text>
        </NavLink>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        pt="1.5rem"
      >
        <NavLink
          to="/wiki"
          activeClassName="is-active"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center ",
          }}
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/wiki.svg`}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Logo"
            sizes="30"
          />
          <Text fontSize="xs">Wiedza</Text>
        </NavLink>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        bg={reportActive ? colors.ORANGE : colors.GREEN}
        padding="1rem"
        borderRadius="26px"
      >
        <NavLink
          to="/report"
          activeClassName="is-active"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center ",
          }}
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/wild-boar-white.svg`}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Logo"
            sizes="50"
          />
          <Text mt="0.5rem" fontSize="xs" color={colors.WHITE}>
            Zgłoś dzika
          </Text>
        </NavLink>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        position="relative"
        pt="1.5rem"
      >
        <NavLink
          to="/alerts"
          activeClassName="is-active"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center ",
          }}
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/alerts.svg`}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Logo"
            sizes="40"
          />
          <Text fontSize="xs">Alerty</Text>
        </NavLink>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        pt="1.5rem"
      >
        <NavLink
          to="/settings"
          activeClassName="is-active"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center ",
          }}
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/settings.svg`}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Logo"
            sizes="30"
          />
          <Text fontSize="xs">Ustawienia</Text>
        </NavLink>
      </Box>
    </Flex>
  );
};
