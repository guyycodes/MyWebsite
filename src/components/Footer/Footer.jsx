import React, {useState} from 'react';
import { Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex, 
  Heading, 
  Text, 
  Link, 
  UnorderedList, 
  ListItem, 
  Icon, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalOverlay, 
  ModalHeader, 
  ModalContent,
  VStack,
  HStack, 
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaGithub, FaTelegram, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { BsThreads } from "react-icons/bs";
import { ChevronDownIcon } from '@chakra-ui/icons';

export const Footer = () => {
  const TextColor = 'white'
  const [isOpen, setIsOpen] = useState(false);
  

    const scrollTo = (percentage) => {
      window.scrollTo({
        top: document.body.scrollHeight * percentage,
        behavior: 'smooth',
      });
    };

  const onOpen = () =>{
    setIsOpen(true);
  }

  const onClose = () =>{
    setIsOpen(false);
  }

  return (
    <>
    <Box as="footer" bg="black" py={16} textAlign="center" color={TextColor}>
      <Flex flexWrap="wrap" justifyContent="center">
        {/* Map */}
        <Box width={['100%', '50%', '25%']} mb={8}>
          <Heading as="h4" size="md" mb={2}>
            Guy Morgan B
          </Heading>
            <Text>
              <Link
                href="https://www.google.com/maps/@39.8317804,-105.004315,18.15z?entry=ttu"
                target="_blank"
                isExternal
              >
                1411 W 33rd Ave
              </Link>
            </Text>
            <Box display="flex" justifyContent="center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6132.330914483945!2d-105.01660822361546!3d39.78084209409564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7866bb40149b%3A0x433eb9a0251eb7e4!2s4630%20Wyandot%20St%2C%20Denver%2C%20CO%2080211!5e0!3m2!1sen!2sus!4v1714408285448!5m2!1sen!2sus"
                width="200"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </Box>
        </Box>
        {/* Contact */}
        <Box width={['100%', '50%', '25%']} mb={8}>
          <Heading as="h4" size="md" mb={2}>
            Contact
          </Heading>
          <Text>
            <Link onClick={() => onOpen('email')}>info@levelupco.com</Link>
          </Text>
          <Text>
            <Link onClick={() => onOpen('phone')}>Contact</Link>
          </Text>
        </Box>
        {/* Home */}
        <Box width={['100%', '50%', '25%']} mb={8}>
          <UnorderedList styleType="none">
            <ListItem>
              <Link onClick={(e) => {
                e.preventDefault();
                setTimeout(() => {
                scrollTo(0.0); // Scroll to 0% down the page
                }, 0);
            }}>HOME</Link>
            </ListItem>

            <ListItem><Link onClick={(e) => {
                e.preventDefault();
                setTimeout(() => {
                scrollTo(0.2); // Scroll to 50% down the page
                }, 0);
            }}>Portfolio</Link></ListItem>
            <ListItem><Link onClick={(e) => {
                e.preventDefault();
                setTimeout(() => {
                scrollTo(0.1); // Scroll to 70% down the page
                }, 0);
            }}>About</Link></ListItem>

            <Menu matchWidth>

              <MenuButton as={Button} variant={TextColor} pl={6}>
                Services
                <ChevronDownIcon />
              </MenuButton>

              <MenuList bg={"transparent"}>
                <MenuItem as="a" href="https://www.levelupco.com" target="_blank" color={"gray.700"} borderRadius={10} mb={1}>Mobile App Development</MenuItem>
                <MenuItem as="a" href="https://www.levelupco.com" target="_blank" color={"gray.700"} borderRadius={10} mb={1}>Custom Software Solutions</MenuItem>
                <MenuItem as="a" href="https://www.levelupco.com" target="_blank" color={"gray.700"} borderRadius={10} mb={1}>UI/UX Design Services</MenuItem>
                <MenuItem as="a" href="https://www.levelupco.com" target="_blank" color={"gray.700"} borderRadius={10} mb={1}>Web Development</MenuItem>
                <MenuItem as="a" href="https://www.levelupco.com" target="_blank" color={"gray.700"} borderRadius={10} mb={1}>CyberSecurity</MenuItem>
                <MenuItem as="a" href="https://www.levelupco.com" target="_blank" color={"gray.700"} borderRadius={10} mb={1}>A.i</MenuItem>
                <MenuItem as="a" href="https://www.levelupco.com" target="_blank" color={"gray.700"} borderRadius={10} mb={1}>Databases</MenuItem>
                <MenuItem as="a" href="https://www.levelupco.com" target="_blank" color={"gray.700"} borderRadius={10}>Business Intelligence</MenuItem>
              </MenuList>
            </Menu>
          </UnorderedList>
        </Box>
        {/* Blog */}
        <Box 
          width={['100%', '50%', '25%']} 
          mb={8}
        >
          <UnorderedList styleType="none">
            <ListItem>
              <Link href="https://medium.com/@guyycodes" isExternal>Blog</Link>
              </ListItem>
            <ListItem>
              <Link href="https://www.levelupco.com" isExternal>Designs</Link>
              </ListItem>
          </UnorderedList>

        </Box>
      </Flex>

      <Link href="#home" bg="gray.300" color="black" py={2} px={4} borderRadius="md" mb={8} display="inline-flex" alignItems="center" 
          onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }}>
        {/* Bottom links & Socials */}
      <Icon as={FaArrowUp} mr={2} 
      onClick={(e) => {
          e.preventDefault();
          setTimeout(() => {
          scrollTo(0.0); // Scroll to 70% down the page
          }, 0);
      }} />
        To The Top
      </Link>

      <Flex justifyContent="center" mt={4}>
        <Link href="https://www.facebook.com/profile.php?id=61558757112366" isExternal mx={2}><Icon as={FaFacebook} w={6} h={6} /></Link>
        <Link href="https://www.instagram.com/guyycodes" isExternal mx={2}><Icon as={FaInstagram} w={6} h={6} /></Link>
        <Link href="https://www.threads.net/@guyycodes" isExternal mx={2}><Icon as={BsThreads} w={6} h={6} /></Link>
        <Link href="https://t.me/guyycodes" isExternal mx={2}><Icon as={FaTelegram} w={6} h={6} /></Link>
        <Link href="https://www.github.com/guyycodes" isExternal mx={2}><Icon as={FaGithub} w={6} h={6} /></Link>
        <Link href="https://www.linkedin.com/in/guymorganb" isExternal mx={2}><Icon as={FaLinkedin} w={6} h={6} /></Link>
      </Flex>

      <Text mt={4} textDecoration={'underline'}>© 2024 LevelUp Apps & Software LLC</Text>

      <VStack flexDirection={'column'}>
        <HStack flexDirection={'row'} justifyContent={'center'}>
        </HStack>   
      </VStack>
    </Box>
         <Modal isOpen={isOpen} onClose={onClose} isCentered>
         <ModalOverlay />
         <ModalContent>
           <ModalHeader color={'black'}><Text>LevelUp Apps & Software LLC</Text></ModalHeader>
           <ModalCloseButton />
           <ModalBody>
           
           <Text color={'black'} >303-495-8899</Text>
           <Text color={'black'}>info@levelupco.com.com</Text>
           <Text color={'black'} > Direct: guymorganb@levelupco.com</Text>

           </ModalBody>
         </ModalContent>
       </Modal>
       </>
  );
};

