import React from "react";
import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

import { colors } from "../theme";

const MenuItems: React.FC<unknown> = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

export const Navbar: React.FC<unknown> = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colors.TURQUE}
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <Image
            src={`${process.env.PUBLIC_URL}/images/dziki-dzik-logo-long.svg`}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Logo"
            htmlWidth={250}
          />
        </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>
          <NavLink to="/stats" activeClassName="is-active">
            Statystyki
          </NavLink>
        </MenuItems>
        <MenuItems>
          <NavLink to="/wiki" activeClassName="is-active">
            Wiedza
          </NavLink>
        </MenuItems>
        <MenuItems>
          <NavLink to="/alerts" activeClassName="is-active">
            Alerty
          </NavLink>
        </MenuItems>
        <MenuItems>
          <NavLink to="/settings" activeClassName="is-active">
            Ustawienia
          </NavLink>
        </MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          <Link to="/report">Zgłoś dzika</Link>
        </Button>
      </Box>
    </Flex>
  );
};
