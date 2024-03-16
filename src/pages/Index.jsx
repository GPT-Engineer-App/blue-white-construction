import React from "react";
import { Box, Flex, Text, Heading, Button, Image, Link, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure, VStack } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* Navbar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="blue.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            BuildCo
          </Heading>
        </Flex>

        <IconButton size="md" icon={isOpen ? <FaTimes /> : <FaBars />} aria-label="Open Menu" display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />

        <Box display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center">
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }} href="#home">
            Home
          </Link>
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }} href="#about">
            About
          </Link>
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }} href="#projects">
            Our Projects
          </Link>
          <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.700" }} href="#contact">
            Contact
          </Link>
        </Box>
      </Flex>

      {/* Mobile Menu */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Link onClick={onClose} href="#home">
                Home
              </Link>
              <Link onClick={onClose} href="#about">
                About
              </Link>
              <Link onClick={onClose} href="#projects">
                Our Projects
              </Link>
              <Link onClick={onClose} href="#contact">
                Contact
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Home */}
      <Box id="home" py={20} textAlign="center" bg="gray.100">
        <Heading as="h2" size="xl" mb={6}>
          Welcome to BuildCo
        </Heading>
        <Text fontSize="xl" mb={8}>
          Your trusted partner in construction
        </Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </Box>

      {/* About */}
      <Box id="about" py={20}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center">
          <Box maxW="sm">
            <Heading as="h2" size="xl" mb={6}>
              About Us
            </Heading>
            <Text fontSize="lg" mb={8}>
              BuildCo is a leading construction company with years of experience in delivering high-quality projects. Our team of experts is dedicated to bringing your vision to life.
            </Text>
            <Button colorScheme="blue">Learn More</Button>
          </Box>
          <Image src="https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzfGVufDB8fHx8MTcxMDU5NTQ5Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Construction Workers" maxW="md" />
        </Flex>
      </Box>

      {/* Our Projects */}
      <Box id="projects" py={20} bg="gray.100">
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Our Projects
        </Heading>
        <Flex justify="space-around" wrap="wrap">
          <Box maxW="sm" mb={8}>
            <Image src="https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZ3xlbnwwfHx8fDE3MTA1OTU0OTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" />
            <Text mt={4} fontSize="xl" fontWeight="bold">
              Project 1
            </Text>
          </Box>
          <Box maxW="sm" mb={8}>
            <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxza3lzY3JhcGVyfGVufDB8fHx8MTcxMDU5NTQ5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" />
            <Text mt={4} fontSize="xl" fontWeight="bold">
              Project 2
            </Text>
          </Box>
          <Box maxW="sm" mb={8}>
            <Image src="https://images.unsplash.com/photo-1597047084897-51e81819a499?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGNvbXBsZXh8ZW58MHx8fHwxNzEwNTk1NDkzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 3" />
            <Text mt={4} fontSize="xl" fontWeight="bold">
              Project 3
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Contact */}
      <Box id="contact" py={20}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center">
          <Box maxW="sm" mb={{ base: 8, md: 0 }}>
            <Heading as="h2" size="xl" mb={6}>
              Contact Us
            </Heading>
            <Text fontSize="lg" mb={8}>
              Ready to start your project? Get in touch with us today!
            </Text>
            <Button colorScheme="blue">Contact Us</Button>
          </Box>
          <Box maxW="sm">
            <Image src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDB8fHx8MTcxMDU5NTQ5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Construction Site" />
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" py={10} bg="blue.500" color="white" textAlign="center">
        <Text>&copy; 2023 BuildCo. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
