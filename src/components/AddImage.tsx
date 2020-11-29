import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import { colors } from "../theme";

type AddImageProps = {
  onChangeHandler: (value: File | undefined) => void;
};

export const AddImage: React.FC<AddImageProps> = ({ onChangeHandler }) => {
  const [file, setFile] = useState<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e?.target?.files?.[0]);
    onChangeHandler(e?.target?.files?.[0]);
  };

  return (
    <Box
      htmlFor="upload"
      as="label"
      bg={colors.WHITE}
      p="1rem"
      mb="1rem"
      border={`2px solid ${colors.ORANGE}`}
      borderRadius="25px"
      display="block"
    >
      {file ? (
        <Text textTransform="uppercase" textAlign="center">
          {file?.name}
        </Text>
      ) : (
        <>
          <Text textTransform="uppercase" textAlign="center">
            Wgraj
          </Text>
          <Image
            src={`${process.env.PUBLIC_URL}/images/import.svg`}
            width="100px"
            height="100px"
            objectFit="contain"
          />
          <input
            style={{ display: "none" }}
            id="upload"
            type="file"
            onChange={handleChange}
          />
        </>
      )}
    </Box>
  );
};
