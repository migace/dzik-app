import React from "react";
import { Box, useRadio } from "@chakra-ui/react";

import { colors } from "../theme";

export const RadioCard: React.FC<any> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="26px"
        _checked={{
          bg: colors.ORANGE,
        }}
        _focus={{
          boxShadow: "none",
        }}
        p={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};
