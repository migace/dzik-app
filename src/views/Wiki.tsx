import React from "react";
import { Box, Heading } from "@chakra-ui/react";

import { colors } from "../theme";

export const Wiki: React.FC<unknown> = () => (
  <Box
    p="1rem"
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="calc(100vh - 93px)"
  >
    <Heading as="h2" size="2xl" color={colors.WHITE} textAlign="center">
      Zapraszamy wkrótce
    </Heading>
  </Box>
);
