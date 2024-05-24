import React, {useState} from "react";
import { Box, 
  Flex,IconButton,
  useColorModeValue, 
  Heading,
  Text,
  Stack,
  UnorderedList,
  Link,
  ListItem,
  List,
  Button, 
  Image, 
  useBreakpointValue, 
  Menu, 
  MenuItem,
  MenuButton,
  MenuList,
  Spacer,
  Drawer,
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton, 
  ModalBody,
 } from "@chakra-ui/react";
  import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import GuyMorganB from '../../../public/GuyMorganB.svg';
import { CustomThemeSwitchButton } from "../../util/CustomeThemeSwitchButton/CustomThemeSwichButton.jsx";
import { Sidebar } from "./MobileNav/Sidebar.jsx";
import { LavaButtonText } from '../../util/buttons/lavaText.jsx'
import ReactMarkdown from 'react-markdown';
import { markDownResume } from '../../util/resumeContent';
import { myerBriggs } from "../../util/myersBriggs.js";
// import { BlobButton } from '../../util/buttons/GooeyButton.jsx'

export const Navbar = () => {
  const [isModal2Open, setIsModal2Open] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 
  // Function to toggle the sidebar/drawer's open/close status
  const toggleDrawer = () => setIsOpen(!isOpen);

  // Function to close the sidebar/drawer
  const onClose = () => setIsOpen(false);

  const openModal = () => {
      setIsModalOpen(true);
    };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };

  // Hook to get responsive text values based on the current viewport size
  const themeSwitchButton = useBreakpointValue({ base: <CustomThemeSwitchButton /> });
  const TextColor = useColorModeValue('button.text.light', 'button.text.dark');
  let navGold = '#ffeaa7'
  let navDark = '#2d3436'

  const scrollTo = (percentage) => {
    window.scrollTo({
      top: document.body.scrollHeight * percentage,
      behavior: 'smooth',
    });
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      position="relative"
      height="80px"
      p="1em"
      bg={`linear-gradient(to right, ${navGold} 40%, ${navDark} 140%)`} // background of primary area
    >
      {/* Left side of the navbar */}
      <Box
        position="absolute"
        left="0"
        top="0"
        bottom="0"
        right="50%"
        borderBottom={`2px solid ${navDark}`}
      />
  
      {/* Logo container */}
      <Box position="absolute" left="1em" transform="translateY(33%)" zIndex="2">
        <Box
          borderRadius="full"
          borderBottom={`2px solid ${navDark}`}
          display="flex"
          alignItems="center"
          justifyContent="center"
          ml="5vw"
          bg={`${navGold}`}// background of area hanging below the image
          height="120px"
          width="120px"
          borderBottomRadius="full"
          borderTop="0"
          _before={{
            content: '""',
            position: "absolute",
            width: "full",
            height: "50%",
            bg: `${navGold}`,  // background of the area behind the logo
            borderRadius: "50% 50% 0 0",
            transform: "translateY(-50%)",
            zIndex: "0",
          }}
        >
          <Image
            src={GuyMorganB}
            sx={{
              transform: 'rotate(-10deg)',
            }}
            boxSize="135px"
            p={0}
            alt="Logo"
            position="absolute"
            bottom="0"
          />
        </Box>
      </Box>
  
      {/* Controls the underline under the navbar */}
      <Box
        position="absolute"
        left="50%"
        top="0"
        bottom="0"
        right="0"
        borderBottom={`2px solid ${navDark}`}

      />
  
      {/* Navbar items */}
      <Flex
        position="absolute"
        left="calc(100vw - 70vw)"
        height="100%"
        align="center"
        zIndex="1"
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HamburgerIcon boxSize={8}/>}
          left={{ base: 70, md: 5 }}
          variant="ghost"
          aria-label="Toggle Navigation"
          onClick={toggleDrawer}
        />
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          {isOpen && <Sidebar />}
        </Drawer>
  
        <Flex
          display={{ base: "none", md: "flex" }}
          position="absolute"
          transform="translateX(33%)"
          height="100%"
          align="center"
          zIndex="1"
        >
          <Menu>
            <MenuButton
              as={Button}
              variant={TextColor}
              pr={4}
              mr={6}
              width="auto"
              border={`1px solid ${navDark}`}
              boxShadow= '0 4px 6px rgba(0, 0, 0, 0.5)'
              // bg={'white'}
            >
              About Me
              <ChevronDownIcon />
            </MenuButton>
            <MenuList width="fit-content" color={'black'}>
              <MenuItem  onClick={(e) => {
                e.preventDefault();
                setTimeout(() => {
                scrollTo(0.2); // Scroll to 50% down the page
                }, 0);
            }}>
                Portfolio
              </MenuItem>
              <MenuItem onClick={openModal}>
                Resume
              </MenuItem>
              <MenuItem onClick={(e) => {
                e.preventDefault();
                setTimeout(() => {
                scrollTo(1.0); // Scroll to 50% down the page
                }, 0);
            }}>
                Social
              </MenuItem>
              <MenuItem onClick={openModal2}>
                Myers-Briggs
              </MenuItem>
            </MenuList>
          </Menu>
          <Spacer />
          <LavaButtonText 
                h={'auto'}
                text={"My Blog"} 
                textColor="white" 
                background={"black"} 
                bubbleStartColor={'black'} 
                bubbleEndColor={"gray.400"}
                handleClick={() => window.location.href = "https://medium.com/@guyycodes"}
              />
        
        </Flex>
      </Flex>
  
      {/* Hire button */}
      <Box
        display="flex"
        flexDirection="row"
        position="absolute"
        top="50%"
        right="3em"
        transform="translateY(-50%)"
        zIndex="banner"
      >
        <Box pr={4} alignSelf="center">
          {themeSwitchButton && <CustomThemeSwitchButton />}
        </Box>
      </Box>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose} >
        {isOpen && <Sidebar/>} {/*Render the sidebar component when the drawer is open.*/}
        </Drawer>

    <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Resume</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box p={4}>
            <ReactMarkdown
              components={{
                h1: ({ children }) => <Heading as="h1" size="xl" mb={4}>{children}</Heading>,
                h2: ({ children }) => <Heading as="h2" size="lg" mt={8} mb={2}>{children}</Heading>,
                ul: ({ children }) => <UnorderedList spacing={2}>{children}</UnorderedList>,
                li: ({ children }) => <ListItem>{children}</ListItem>,
                p: ({ children }) => <Text mb={2}>{children}</Text>,
                a: ({ children, href }) => <Link color="blue.500" href={href} isExternal>{children}</Link>,
              }}
            >
              {markDownResume}
            </ReactMarkdown>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>

       {/* Second Modal */}
       <Modal isOpen={isModal2Open} onClose={closeModal2} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Myers Briggs - Guy Morgan B</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box p={4}>
            <ReactMarkdown
              components={{
                h1: ({ children }) => <Heading as="h1" size="xl" mb={4}>{children}</Heading>,
                h2: ({ children }) => <Heading as="h2" size="lg" mt={8} mb={2}>{children}</Heading>,
                ul: ({ children }) => <UnorderedList spacing={2}>{children}</UnorderedList>,
                li: ({ children }) => <ListItem>{children}</ListItem>,
                p: ({ children }) => <Text mb={2}>{children}</Text>,
                a: ({ children, href }) => <Link color="blue.500" href={href} isExternal>{children}</Link>,
              }}
            >
              {myerBriggs}
            </ReactMarkdown>
          </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
  };
  