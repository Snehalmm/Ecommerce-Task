import React from 'react';
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Image,
  border,
} from '@chakra-ui/react';
import {
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import SearchBar from './SearchBar'
import { toast } from 'react-toastify';
import logo from "../../assets/images/ATLogo.png"

const Header = ({ onOpen, ...rest }) => {
    return (
      <Flex
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between' }}
        {...rest}>
  
       <Box width={"50%"}>
        <Flex alignItems={"center"}>
       <Box>
        <Flex alignItems={"center"}>
        <Image src={logo} height={39} width={39}/>
        <Text
          display={{ base: 'flex', md: 'flex-start' }}
          fontSize="1xl"
          fontFamily="monospace"
          fontWeight="bold"
          marginRight={"100px"}
        >
          A.T.lnks
        </Text>
        </Flex>
       </Box>
       <SearchBar width="60%" size={"md"}/>
        </Flex>
       </Box>
  
        <HStack spacing={{ base: '0', md: '6' }}>
        <Image src={logo} height={39} width={39} border="1px solid gray" borderRadius="50%"/>
          {/* <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
            onClick={()=>toast.info("Coming soon...!")}
          /> */}
          <Flex alignItems={'center'} >
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}>
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm">Justina Clark</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <MenuItem onClick={()=>toast.info("Coming soon...!")}>  Profile</MenuItem>
                <MenuItem onClick={()=>toast.info("Coming soon...!")}>Settings</MenuItem>
                <MenuItem onClick={()=>toast.info("Coming soon...!")}> Billing</MenuItem>
                <MenuDivider />
                <MenuItem onClick={()=>toast.info("Coming soon...!")}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    );
  };
  
export default Header;
