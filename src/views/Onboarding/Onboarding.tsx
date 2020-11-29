import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Box, Text, Image, Button } from "@chakra-ui/react";

import { colors } from "../../theme";

type OnboardingProps = {
  onFinish: (value: string) => void;
};

export const Onboarding: React.FC<OnboardingProps> = ({ onFinish }) => {
  const [index, setIndex] = useState<number>(0);

  const nextSlide = () => setIndex((curr: number) => curr + 1);
  const finish = () => {
    onFinish("1");
  };

  return (
    <SwipeableViews index={index} style={{ height: "100%" }}>
      <Box position="relative" height="100%">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="calc(100% - 100px)"
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/dziki-dzik-vertical.png`}
            alt="Dzik logo"
            maxW="80%"
            m="0 auto 2rem"
          />
          <Text
            mb="1rem"
            fontSize="2xl"
            textAlign="center"
            color={colors.WHITE}
            lineHeight="28px"
          >
            Widzisz dzika?
            <br />
            Zgłoś to!
          </Text>
          <Text
            fontSize="sm"
            textAlign="center"
            color={colors.WHITE}
            p="0 1rem"
          >
            Pomóż powstrzymać rozprzestrzenianie się groźnej choroby dzików i
            świń
          </Text>
        </Box>
        <Box
          position="absolute"
          bottom="1rem"
          left="50%"
          transform="translateX(-50%)"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Button
            bg={colors.ORANGE}
            color={colors.WHITE}
            textTransform="uppercase"
            mb="0.5rem"
            p="1rem 2rem"
            borderRadius="100px"
            onClick={nextSlide}
          >
            Zobacz jak to działa
          </Button>
          <Button bg="transparent" color={colors.ORANGE} textAlign="center">
            Zaloguj się
          </Button>
        </Box>
      </Box>

      <Box position="relative" height="100%">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="calc(100% - 100px)"
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/localization.png`}
            alt="Dzik logo"
            maxW="80%"
            m="0 auto 2rem"
          />
          <Text
            mb="1rem"
            fontSize="2xl"
            textAlign="center"
            color={colors.WHITE}
            lineHeight="28px"
          >
            Zlokalizuj
          </Text>
          <Text
            fontSize="sm"
            textAlign="center"
            color={colors.WHITE}
            p="0 1rem"
          >
            To proste! Wystarczy, że klikniesz przycisk "Zgłoś dzika", a
            aplikacja automatycznie pobierze Twoją lokalizację. Możesz ją też
            wybrać ręcznie.
          </Text>
        </Box>
        <Box
          position="absolute"
          bottom="1rem"
          left="50%"
          transform="translateX(-50%)"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Button
            bg={colors.ORANGE}
            color={colors.WHITE}
            textTransform="uppercase"
            mb="0.5rem"
            p="1rem 2rem"
            borderRadius="100px"
            onClick={nextSlide}
          >
            Idź dalej
          </Button>
          <Button bg="transparent" color={colors.ORANGE} textAlign="center">
            Zaloguj się
          </Button>
        </Box>
      </Box>

      <Box position="relative" height="100%">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="calc(100% - 100px)"
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/precision.png`}
            alt="Dzik logo"
            maxW="80%"
            m="0 auto 2rem"
          />
          <Text
            mb="1rem"
            fontSize="2xl"
            textAlign="center"
            color={colors.WHITE}
            lineHeight="28px"
          >
            Doprecyzuj
          </Text>
          <Text
            fontSize="sm"
            textAlign="center"
            color={colors.WHITE}
            p="0 1rem"
          >
            Szybko wybierz z listy opcji jakiego dzika zgłaszasz: żywego czy
            padłego, jednego, małe lub duże stado, czy też lochę (samica dzika)
            z małymi.
          </Text>
        </Box>
        <Box
          position="absolute"
          bottom="1rem"
          left="50%"
          transform="translateX(-50%)"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Button
            bg={colors.ORANGE}
            color={colors.WHITE}
            textTransform="uppercase"
            mb="0.5rem"
            p="1rem 2rem"
            borderRadius="100px"
            onClick={nextSlide}
          >
            Idź dalej
          </Button>
          <Button bg="transparent" color={colors.ORANGE} textAlign="center">
            Zaloguj się
          </Button>
        </Box>
      </Box>

      <Box position="relative" height="100%">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="calc(100% - 100px)"
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/add-image.png`}
            alt="Dzik logo"
            maxW="80%"
            m="0 auto 2rem"
          />
          <Text
            mb="1rem"
            fontSize="2xl"
            textAlign="center"
            color={colors.WHITE}
            lineHeight="28px"
          >
            Dodaj zdjęcie
          </Text>
          <Text
            fontSize="sm"
            textAlign="center"
            color={colors.WHITE}
            p="0 1rem"
          >
            Jeśli możesz bezpiecznie (przeczytaj nasze wskazówki) zrobić
            zdjęcie, dodaj je do swojego zgłoszenia.
            <br />
            Zdjęcia są dla nas ważne zarówno w przypadku żywych, jak i padłych
            dzików lub ich szczątek.
          </Text>
        </Box>
        <Box
          position="absolute"
          bottom="1rem"
          left="50%"
          transform="translateX(-50%)"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Button
            bg={colors.ORANGE}
            color={colors.WHITE}
            textTransform="uppercase"
            mb="0.5rem"
            p="1rem 2rem"
            borderRadius="100px"
            onClick={finish}
          >
            Rozpocznij
          </Button>
          <Button bg="transparent" color={colors.ORANGE} textAlign="center">
            Zaloguj się
          </Button>
        </Box>
      </Box>
    </SwipeableViews>
  );
};
