import React, { ReactText } from "react";
import {
  HStack,
  VStack,
  useRadioGroup,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

import { colors } from "../../theme";
import { RadioCard } from "../../components/RadioCard";

const DATA: any = {
  zywy: {
    name: "Żywy / żywe",
    imageSrc: `${process.env.PUBLIC_URL}/images/wild-boar-alive.svg`,
  },
  padly: {
    name: "Padły / padłe",
    imageSrc: `${process.env.PUBLIC_URL}/images/wild-boar-dead.svg`,
  },
};

type AliveProps = {
  onChangeHandler: (value: ReactText) => void;
};

export const Alive: React.FC<AliveProps> = ({ onChangeHandler }) => {
  const options = ["zywy", "padly"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "alive",
    defaultValue: "żywy",
    onChange: onChangeHandler,
  });

  const group = getRootProps();

  return (
    <>
      {isMobile ? (
        <VStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                <Box
                  bg={colors.WHITE}
                  p=".5rem"
                  border={`2px solid ${colors.ORANGE}`}
                  borderRadius="25px"
                >
                  <Text textTransform="uppercase" textAlign="center">
                    {DATA[value].name}
                  </Text>
                  <Image src={DATA[value].imageSrc} width="150px" />
                </Box>
              </RadioCard>
            );
          })}
        </VStack>
      ) : (
        <HStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
      )}
    </>
  );
};
