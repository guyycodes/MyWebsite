import React, { useState }  from 'react';
import {
    Box,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Link,
    Modal,
    Icon,  
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody,
    HStack,
    Heading,
    Text,
    Stack,
    UnorderedList,
    ListItem,
    List,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaGithub, FaDiscord, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { BsThreads } from "react-icons/bs";
import ReactMarkdown from 'react-markdown';
import { markDownResume } from '../../../util/resumeContent';
import { myerBriggs } from '../../../util/myersBriggs';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false)

    const openModal = () => {
        setIsOpen(true);
      };

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal2 = () => {
        setIsModal2Open(true);
      };
    
    const closeModal2 = () => {
        setIsModal2Open(false);
    };

    const scrollTo = (percentage) => { 
        window.scrollTo({
          top: document.body.scrollHeight * percentage,
          behavior: 'smooth',
        });
      };

    return (
    <>
    <DrawerOverlay />
    <DrawerContent bg="black" color="white">
    <DrawerCloseButton size="lg" />
    <DrawerHeader borderBottomWidth="1px" fontSize="2xl" p={4}>
        Menu
    </DrawerHeader>
    <DrawerBody>
        <VStack spacing={4} align="stretch">
        <Accordion allowMultiple>
            
        <AccordionItem>
            <AccordionButton>
            <Box flex="1" textAlign="left">
                Info
            </Box>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <VStack align="stretch">
                <Link onClick={(e) => {
                        e.preventDefault();
                        setTimeout(() => {
                        scrollTo(0.2); // Scroll to 50% down the page
                        }, 0);
                    }}>
                Portfolio
                </Link>
                <Link onClick={openModal}>
                Resume
                </Link>
                <Link onClick={openModal2}>
                Myers-Briggs
                </Link>
                <Link onClick={(e) => {
                        e.preventDefault();
                        setTimeout(() => {
                        scrollTo(0.4); // Scroll to 70% down the page
                        }, 0);
                    }}>
                Contact
                </Link>
            </VStack>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionButton>
            <Box flex="1" textAlign="left">
            Social
            </Box>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <VStack align="stretch">
                <HStack justifyContent={'center'}>
                <Link href="https://www.facebook.com" isExternal mx={2}><Icon as={FaFacebook} w={6} h={6} /></Link>
                <Link href="https://www.instagram.com" isExternal mx={2}><Icon as={FaInstagram} w={6} h={6} /></Link>
                <Link href="https://www.threads.com" isExternal mx={2}><Icon as={BsThreads} w={6} h={6} /></Link>
                <Link href="https://www.discord.com" isExternal mx={2}><Icon as={FaDiscord} w={6} h={6} /></Link>
                <Link href="https://www.github.com" isExternal mx={2}><Icon as={FaGithub} w={6} h={6} /></Link>
                <Link href="https://www.linkedin.com" isExternal mx={2}><Icon as={FaLinkedin} w={6} h={6} /></Link>
                </HStack>
                </VStack>
            </AccordionPanel>
            </AccordionItem>
        </Accordion>
        </VStack>
    </DrawerBody>
    </DrawerContent>
    
    <Modal isOpen={isOpen} onClose={closeModal}>
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
    </>
  );
};