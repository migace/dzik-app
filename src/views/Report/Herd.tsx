import React, { ReactText } from "react";
import { HStack, useRadioGroup, Box, Image } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

import { colors } from "../../theme";
import { RadioCard } from "../../components/RadioCard";

const IMAGE_MAP = [
  "wild-boar.png",
  "wild-boar-children.png",
  "wild-boar-small-herd.png",
  "wild-boar-big-herd.png",
];

type HerdProps = {
  onChangeHandler: (value: ReactText) => void;
};

export const Herd: React.FC<HerdProps> = ({ onChangeHandler }) => {
  const options = ["0", "1", "2", "3"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "herd",
    defaultValue: "0",
    onChange: onChangeHandler,
  });

  const group = getRootProps();

  return (
    <>
      {isMobile ? (
        <Box {...group} display="flex" flexWrap="wrap">
          {options.map((value) => {
            const radio: any = getRadioProps({ value });

            return (
              <Box
                key={value}
                width="calc(50% - 1rem)"
                display="flex"
                justifyContent="center"
                p=".5rem"
                bg={radio.isChecked ? colors.ORANGE : colors.WHITE}
                m=".5rem"
                borderRadius="26px"
              >
                <RadioCard {...radio}>
                  <Image
                    width="128"
                    height="128"
                    src={`${process.env.PUBLIC_URL}/images/${
                      IMAGE_MAP[parseInt(value)]
                    }`}
                    alt="Rozmiar stada"
                  />
                </RadioCard>
              </Box>
            );
          })}
        </Box>
      ) : (
        <HStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                <img
                  width="64"
                  height="64"
                  src={`${process.env.PUBLIC_URL}/images/${
                    IMAGE_MAP[parseInt(value)]
                  }`}
                  alt="Rozmiar stada"
                />
              </RadioCard>
            );
          })}
        </HStack>
      )}
    </>
  );
};
