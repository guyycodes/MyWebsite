// Import necessary packages 
import React, { useState, useEffect } from "react";
import { Box, Image, Button, Center, Text, HStack, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";


export const SlidingGallery = ({ images, titles, descriptions, prices }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = images.length;
  
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
  
    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
  
    return (
      <Box position="relative" overflow="hidden" boxShadow="dark-lg" borderRadius="md" mb={4}>
        <Image
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          w="full"
          h={{ base: "300px", md: "500px" }}
          objectFit="cover"
        />
  
        <VStack position="absolute" bottom="0" bg="whiteAlpha.800" w="full" p={4}>
          <Text display="white" fontSize="xl">{titles[currentSlide]}</Text>
          <Text color={'black'} >{descriptions[currentSlide]}</Text>
          <Text fontWeight="bold" color={'black'}>{prices[currentSlide]}</Text>
        </VStack>
  
        <Center
          position="absolute"
          top="50%"
          left="5px"
          transform="translateY(-50%)"
          zIndex="docked"
        >
          <Button
            color={'black'}
            size="xl"
            onClick={prevSlide}
            leftIcon={<ChevronLeftIcon boxSize={12} />}
          />
        </Center>
        <Center
          position="absolute"
          top="50%"
          right="5px"
          transform="translateY(-50%)"
          zIndex="docked"
        >
          <Button
            color={'black'}
            size="xl"
            onClick={nextSlide}
            rightIcon={<ChevronRightIcon boxSize={12} />}
          />
        </Center>
  
        <HStack
          justify="center"
          position="absolute"
          bottom="5px"
          width="full"
        >
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`indicator-${slide}`}
              boxSize="3"
              bg={slide === currentSlide ? "gray.900" : "gray.300"}
              borderRadius="full"
              margin="0 2px"
              transition="0.3s cubic-bezier(.47,1.64,.41,.8)"
            />
          ))}
        </HStack>
      </Box>
    );
  };