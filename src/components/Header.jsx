import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerCloseButton,DrawerContent,DrawerOverlay,Button, useDisclosure, VStack, HStack} from "@chakra-ui/react";
import {BiMenuAltLeft, BiOutline} from "react-icons/bi"
import { Link } from 'react-router-dom';
const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <>
    <Button 
    pos={"fixed"}
    top={"4"}
    left={"4"}
    colorScheme="purple"
    p={"0"}
    w={"10"}
    h={"10"}
    zIndex={'overlay'}
    borderRadius={"full"}
    onClick={onOpen}
    >
    <BiMenuAltLeft size={"20"}/>
    </Button>
     <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
     <DrawerOverlay />
     <DrawerContent>
     <DrawerCloseButton />
     <DrawerHeader >Main Menu</DrawerHeader>
     <DrawerBody>
        <VStack alignItems={'flex-start'}>
            <Button  onClick={onClose}  variant={"ghost"} colorScheme="purple">
                <Link to={'/'}>Home</Link>
            </Button>
            <Button onClick={onClose}  variant={"ghost"} colorScheme="purple">
                <Link to={'/videos'}>videos</Link>
            </Button>
            <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={'/vedeos?category=free'}>Free Videos</Link>
            </Button>
            <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={'/upload'}>Upload Videos</Link>
            </Button>
        </VStack>
        <HStack pos={'absolute'} bottom={"10"} left={"0"} w={'full'} justifyContent={'space-evenly'}>
            <Button onClick={onClose} colorScheme={'purple'}>
            <Link to='/logIn'>Log In</Link>
            </Button>
            <Button onClick={onClose} colorScheme={'purple'} variant={'outline'} >
            <Link to='/signup'>Sign Up</Link>
            </Button>
        </HStack>
     </DrawerBody>
     </DrawerContent>

    </Drawer>
    </>
  )
}

export default Header