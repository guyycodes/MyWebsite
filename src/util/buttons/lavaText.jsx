import React from 'react';
import { Box, Button, keyframes, Image, Link, chakra } from '@chakra-ui/react';

// Define keyframes for animations
const move = (distance, bubbleStartColor, bubbleEndColor) => keyframes`
  0% { transform: translate(0, 0); background-color: ${bubbleStartColor}; }
  20% { background-color: ${bubbleStartColor}; } // Adjust according to where you want the transition to be more noticeable
  97% { background-color: ${bubbleEndColor}; }
  99% { transform: translate(0, ${distance}); background-color: black; }
  100% { transform: translate(0, 0); opacity: 0; background-color: black; }
`;

const LavaButtonComponent = ({ text, textColor, background, effectBackground, bubbleStartColor, bubbleEndColor, handleClick, ...rest }) => {
  // Array of distances for the bubble animations
  const animationDistances = [
    `${Math.random() + 1 * -125}px`, // Random between 0 and -104
    `${Math.random() + 1 * -115}px`,  // Random between 0 and -85
    `${Math.random() + 1 * -100}px`, // Random between 0 and -130
    `${Math.random() + 1 * -110}px`, // Random between 0 and -109
    `${Math.random() + 1 * -120}px`,  // Random between 0 and -93
    `${Math.random() + 1 * -120}px`,  // Random between 0 and -80
// Random between 0 and -72
    // `${Math.random() + 1 * -85}px`,  // Random between 0 and -94
    // `${Math.random() + 1 * -90}px`,   // Random between 0 and -65
  ];

  // Create an array of bubbles with animations
  const bubbles = animationDistances.map((distance, index) => (
    <Box
      key={`bubble-${index}`}
      className="bubble"
      width="25px"
      height="25px"
      borderRadius="50%"
      backgroundColor={effectBackground}
      position="absolute"
      zIndex={-1}
      left={`${(index+2) * Math.random() * 15}px`} // For demonstration; adjust as needed
      css={{
        animation: `${move(distance, bubbleStartColor, bubbleEndColor)} 2s infinite`,
        animationDelay: `${index * 0.2}s`,
      }}
    />
  ));

  return (
    <>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="auto"
      backgroundColor="none"
      fontFamily="Roboto"
      fontSize="1em"
      m={0}
      p={0}
      w="auto"
    >
   
      <Button
        onClick={handleClick}
        {...rest}
        zIndex={5}
        id="gooey-button"
        p="1rem"
        fontSize="1rem"
        border="none"
        color={textColor}
        filter="url('#gooey')"
        position="relative"
        bg={background}
        _focus={{ outline: 'none' }}
        _hover={{
          bg: `${bubbleStartColor}`, // Keeps the background the same on hover
          color: `white`, // Optional: Adjust if you have a specific color on hover you want to keep consistent
          transform: "none", // If there's any transformation on hover, negate it here
          // Include any other property you want to remain unchanged on hover
        }}
      >
        <Link href="index.html" >
            {text}
        </Link>
        <Box position="absolute" top={0} left={0} bottom={0} right={4} className="bubbles">
          {bubbles}
        </Box>
      </Button>

    </Box>
          <Box as="svg"  xmlns="http://www.w3.org/2000/svg" version="1.1"  display={{base: 'none', sm: 'flex'}}>
          <defs>
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  1 1 1 0 0  0 0 0 19 -9"
                result="highContrastGraphic"
              />
              <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
            </filter>
          </defs>
        </Box>
        </>
  );
};

export const LavaButtonText = chakra(LavaButtonComponent)
