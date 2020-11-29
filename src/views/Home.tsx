import React from "react";
import {
  Box,
  Image,
  Text,
  TabList,
  TabPanel,
  Tab,
  Tabs,
  TabPanels,
  Container,
} from "@chakra-ui/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { colors } from "../theme";

export const Home: React.FC<unknown> = () => (
  <Container maxW="md" p="0 1rem">
    <Box display="flex" alignItems="center" justifyContent="center">
      <Image
        src={`${process.env.PUBLIC_URL}/images/wild-boar.svg`}
        alt="Dzik"
      />
      <Image
        src={`${process.env.PUBLIC_URL}/images/dzik-dzik.png`}
        alt="Dzik dzik napis"
        m="1rem 6px 2rem"
      />
      <Image
        src={`${process.env.PUBLIC_URL}/images/wild-boar.svg`}
        alt="Dzik"
        transform="scaleX(-1)"
      />
    </Box>
    <Text
      fontSize="md"
      fontWeight="semibold"
      mb="1rem"
      textTransform="uppercase"
      color={colors.WHITE}
    >
      Statystyki
    </Text>
    <Box display="flex" justifyContent="space-around" mb="2rem">
      <Box
        bg={colors.ORANGE}
        color={colors.WHITE}
        borderRadius="1rem"
        p="0.5rem 1rem"
      >
        <Text fontSize="md" fontWeight="semibold">
          Zgłoszonych
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          23,981
        </Text>
      </Box>
      <Box
        bg={colors.RED}
        color={colors.WHITE}
        borderRadius="1rem"
        p="0.5rem 1rem"
      >
        <Text fontSize="md" fontWeight="semibold">
          Zarażonych
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          3,876
        </Text>
      </Box>
    </Box>

    <Box>
      <Text
        fontSize="md"
        fontWeight="semibold"
        mb="1rem"
        textTransform="uppercase"
        color={colors.WHITE}
      >
        Mapy
      </Text>

      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList mb="1rem" display="flex" justifyContent="center">
          <Tab>Występowanie</Tab>
          <Tab>Zakażenia</Tab>
        </TabList>
        <TabPanels>
          <TabPanel
            position="relative"
            display="flex"
            justifyContent="center"
            p={0}
          >
            <TransformWrapper
              defaultScale={1}
              defaultPositionX={200}
              defaultPositionY={100}
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }: any) => (
                <>
                  <Box
                    display="flex"
                    flexDirection="column"
                    position="absolute"
                    zIndex="999"
                    right={0}
                  >
                    <button
                      style={{ background: colors.WHITE, padding: "4px" }}
                      onClick={zoomIn}
                    >
                      +
                    </button>
                    <button
                      style={{ background: colors.WHITE, padding: "4px" }}
                      onClick={zoomOut}
                    >
                      -
                    </button>
                  </Box>
                  <TransformComponent>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/dzik-app.appspot.com/o/maps%2Fboar_sightings_2020-11-29_021055.png?alt=media&token=60000b31-c195-45b7-8ea1-529af7bf6dc8"
                      maxH="250px"
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </TabPanel>
          <TabPanel
            position="relative"
            display="flex"
            justifyContent="center"
            p={0}
          >
            <TransformWrapper
              defaultScale={1}
              defaultPositionX={200}
              defaultPositionY={100}
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }: any) => (
                <>
                  <Box
                    display="flex"
                    flexDirection="column"
                    position="absolute"
                    zIndex="999"
                    right={0}
                  >
                    <button
                      style={{ background: colors.WHITE, padding: "4px" }}
                      onClick={zoomIn}
                    >
                      +
                    </button>
                    <button
                      style={{ background: colors.WHITE, padding: "4px" }}
                      onClick={zoomOut}
                    >
                      -
                    </button>
                  </Box>
                  <TransformComponent>
                    <Image
                      src="https://firebasestorage.googleapis.com/v0/b/dzik-app.appspot.com/o/maps%2Fsick_boars_2020-11-29_021055.png?alt=media&token=87fbd1bd-fe6b-48cf-879a-5ea523e59aa8"
                      maxH="250px"
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Container>
);
