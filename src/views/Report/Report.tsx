import React, { useState, ReactText, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  Text,
  Image,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";

import { AddImage } from "../../components/AddImage";
import { colors } from "../../theme";
import { firebase, storage } from "../../firebase";
import { useGeolocation } from "../../hooks/useGeolocation";

import { Alive } from "./Alive";
import { Herd } from "./Herd";

export const Report: React.FC<unknown> = () => {
  const { longitude, latitude } = useGeolocation();
  const [herd, setHerd] = useState<ReactText>("");
  const [alive, setAlive] = useState<ReactText>("");
  const [image, setImage] = useState<File | undefined>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [map, setMap] = React.useState<google.maps.Map | null>();
  const [index, setIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const nextSlide = () => setIndex((curr: number) => curr + 1);

  const onLoad = React.useCallback(function callback(map) {
    const bounds: any = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onMobileChangeAliveHandler = (value: any) => {
    setAlive(value);
    nextSlide();
  };

  const onMobileChangeHerdHandler = (value: any) => {
    console.log("value", value);
    setHerd(value);
    nextSlide();
  };

  const uploadImage = () => {
    if (image?.name) {
      setLoading(true);
      const uploadTask = storage.ref(`/images/${image?.name}`).put(image);
      uploadTask.on("state_changed", console.log, console.error, () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setImage(undefined);
            console.log("url", url);
            setImageUrl(url);
            setLoading(false);
          });
      });
    }
  };

  const getHerd = (herd: any) => {
    if (herd === 0) {
      return "jeden";
    } else if (herd === 1) {
      return "locha z młodymi";
    } else if (herd === 2) {
      return "małe stado (5 - 15)";
    } else {
      return "duże stado (15+)";
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    sendRequest();
  };

  const sendRequest = () => {
    const db = firebase.firestore();
    const userRef = db.collection("wild-boar").add({
      alive: alive === "żywy",
      herd: Number(herd),
      image: imageUrl || "",
      age: -1,
      geolocation: [latitude, longitude],
      sick: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    onOpen();
  };

  useEffect(() => {
    if (map) {
      const infoWindow = new google.maps.InfoWindow();
      const pos = { lat: latitude, lng: longitude };

      infoWindow.setPosition(pos);
      infoWindow.setContent("Location found.");
      infoWindow.open(map);
      map.setCenter(pos);
    }
  }, [latitude, longitude, map, map]);

  return (
    <>
      {isMobile ? (
        <SwipeableViews index={index} style={{ height: "100%" }}>
          <Box p="0 1rem">
            <Heading
              as="h3"
              size="lg"
              color={colors.ORANGE}
              p="2rem 0"
              textAlign="center"
            >
              Zgłaszanie dzika
            </Heading>
            <Text size="md" textAlign="center" mb="2rem" color={colors.WHITE}>
              Potwierdź lub zaznacz lokalizację dzika (lub dzików)
            </Text>
            <LoadScript googleMapsApiKey="AIzaSyCETRAcLMrw5Y5kW9eD9IXsn0HAKZHg5FE">
              <GoogleMap
                mapContainerStyle={{
                  width: "100%",
                  height: "250px",
                  borderRadius: "26px",
                  border: `2px solid ${colors.ORANGE}`,
                  marginBottom: "2rem",
                }}
                center={{
                  lat: -3.745,
                  lng: -38.523,
                }}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                <></>
              </GoogleMap>
            </LoadScript>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Button
                bg={colors.ORANGE}
                color={colors.WHITE}
                width="200px"
                mb="1rem"
                onClick={nextSlide}
              >
                Potwierdź
              </Button>
              <Button
                bg={colors.WHITE}
                color={colors.ORANGE}
                disabled
                width="200px"
              >
                Zaznacz na mapie
              </Button>
            </Box>
          </Box>

          <Box p="0 1rem">
            <Heading
              as="h3"
              size="lg"
              color={colors.ORANGE}
              p="2rem 0"
              textAlign="center"
            >
              Zgłaszanie dzika
            </Heading>
            <Text size="md" textAlign="center" mb="2rem" color={colors.WHITE}>
              W jakim stanie był napotkany dzik (lub dziki)?
            </Text>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Alive onChangeHandler={onMobileChangeAliveHandler} />
            </Box>
          </Box>

          <Box p="0 1rem">
            <Heading
              as="h3"
              size="lg"
              color={colors.ORANGE}
              p="2rem 0"
              textAlign="center"
            >
              Zgłaszanie dzika
            </Heading>
            <Text size="md" textAlign="center" mb="2rem" color={colors.WHITE}>
              Ile było dzików?
            </Text>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Herd onChangeHandler={onMobileChangeHerdHandler} />
            </Box>
          </Box>

          <Box p="0 1rem">
            <Heading
              as="h3"
              size="lg"
              color={colors.ORANGE}
              p="2rem 0"
              textAlign="center"
            >
              Zgłaszanie dzika
            </Heading>
            <Text size="md" textAlign="center" mb="2rem" color={colors.WHITE}>
              Wgraj lub zrób zdęcie (opcjonalnie)
            </Text>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb="1rem"
            >
              <AddImage onChangeHandler={setImage} />
              <Box
                bg={colors.WHITE}
                p="1rem"
                border={`2px solid ${colors.ORANGE}`}
                borderRadius="25px"
              >
                <Text textTransform="uppercase" textAlign="center">
                  Zrób
                </Text>
                <Image
                  src={`${process.env.PUBLIC_URL}/images/camera.svg`}
                  width="100px"
                  height="100px"
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Button
              bg={colors.ORANGE}
              color={colors.WHITE}
              width="200px"
              ml="50%"
              transform="translateX(-50%)"
              onClick={() => {
                uploadImage();
                nextSlide();
              }}
            >
              Podsumowanie
            </Button>
          </Box>

          <Box p="0 1rem">
            <Heading
              as="h3"
              size="lg"
              color={colors.ORANGE}
              p="2rem 0"
              textAlign="center"
            >
              Zgłaszanie dzika
            </Heading>
            <Text
              size="md"
              mb="1.5rem"
              textDecoration="underline"
              color={colors.WHITE}
            >
              Podsumowanie
            </Text>
            <Text
              color={colors.WHITE}
              fontSize="md"
              fontWeight="semibold"
              textTransform="uppercase"
            >
              Lokalizacja
            </Text>
            <Text mb="1.5rem" color={colors.WHITE}>
              {latitude}, {longitude}
            </Text>
            <Text
              color={colors.WHITE}
              fontSize="md"
              fontWeight="semibold"
              textTransform="uppercase"
            >
              Szczegóły
            </Text>
            <Text mb="1.5rem" color={colors.WHITE}>
              - {alive}
              <br />- {getHerd(herd)}
            </Text>
            <Text
              color={colors.WHITE}
              fontSize="md"
              fontWeight="semibold"
              textTransform="uppercase"
            >
              Zdjęcie
            </Text>
            <Box display="flex" justifyContent="center" p="1rem">
              {loading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color={colors.ORANGE}
                  size="xl"
                />
              ) : (
                <Image
                  src={imageUrl}
                  width="150px"
                  height="150px"
                  objectFit="contain"
                />
              )}
            </Box>
            <Button
              bg={colors.ORANGE}
              color={colors.WHITE}
              width="200px"
              ml="50%"
              transform="translateX(-50%)"
              onClick={onSubmit}
            >
              Wyślij zgłoszenie
            </Button>
          </Box>
        </SwipeableViews>
      ) : (
        <Flex width="full" align="center" justifyContent="center">
          <Box p={2}>
            <Box textAlign="center" mt={8}>
              <Heading>Zgłaszanie nowego przypadku</Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form onSubmit={onSubmit}>
                <FormControl mt={6}>
                  <Text mb="8px">Stan dzika</Text>
                  <Alive onChangeHandler={setAlive} />
                </FormControl>
                <FormControl mt={6}>
                  <Text mb="8px">Liczebość stada</Text>
                  <Herd onChangeHandler={setHerd} />
                </FormControl>
                <FormControl mt={6}>
                  <Text mb="8px">Zdjęcie dzika</Text>
                  <AddImage onChangeHandler={setImage} />
                </FormControl>
                <FormControl mt={6}>
                  <Text mb="8px">Twoja pozycja</Text>
                  <Input isDisabled value={`${latitude}, ${longitude}`} />
                </FormControl>
                <Button
                  width="full"
                  mt={4}
                  type="submit"
                  bg={colors.ORANGE}
                  color={colors.WHITE}
                >
                  Zgłoś
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      )}
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <VStack pt="1rem">
                <Image src={`${process.env.PUBLIC_URL}/images/success.svg`} />
                <Heading as="h4" size="md" mb="2rem">
                  Dziękujemy!
                </Heading>
                <Text mb="2rem">
                  Dzięki Tobie jesteśmy w stanie lepiej kontrolować
                  rozprzestrzenianie się ASF – dla dobra dzików, świń i nas
                  wszystkich!
                </Text>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button
                bg={colors.ORANGE}
                color={colors.WHITE}
                borderRadius="26px"
                onClick={() => {
                  onClose();
                  history.push("/");
                }}
              >
                Zakończ
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      )
    </>
  );
};
