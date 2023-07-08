import React, { useState } from 'react'
import {
  Box, 
  Icon, 
  Text,
  Link,
  Flex,
  Image,
} from '@chakra-ui/react';
import { FaThLarge, FaHeart, FaCubes, FaCertificate, FaBox } from "react-icons/fa";
import { toast } from 'react-toastify';
import logo from "../../assets/images/ATLogo.png"


const LinkItems = [
  { name: 'Dashboard', icon: FaThLarge, id:1 },
  { name: 'All Products', icon: FaCubes, link: '/', id:2 },
  { name: 'Orders', icon: FaBox, id:3 },
  { name: 'Favourites', icon: FaHeart, id:4 },
  { name: 'New Arrival', icon: FaCertificate, id:5 },
];



const SiderBarContent = ({history}) => {
    const [activeLink, setActiveLink] = useState(2)
    const onActive = (getID) =>{
      setActiveLink(getID)
      toast.info("Coming soon...!")
    }

    const NavItem = ({ icon, children, link, index, id, ...rest }) => {
        return (
          <Link href={link? link: '#'} style={{ textDecoration: 'none' }} 
            className={id === activeLink ? 'active-link':''}
            _focus={{ boxShadow: 'none' }}
            onClick={()=>onActive(id)}>
            <Flex
              align="center"
              p="4"
              mx="4"
              borderRadius="lg"
              role="group"
              className={id === activeLink? 'active-link':''}
              cursor="pointer"
              _hover={{
                bg: 'cyan.400',
                color: 'white',
              }}
              {...rest}>
              {icon && (
                <Icon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                    color: '#E32227',
                  }}
                  as={icon}
                />
              )}
              {children}
            </Flex>
          </Link>
        );
    };

    return (
      <Box>
        <Flex h="20" alignItems="center" mx="8">
        <Image src={logo} height={39} width={39}/>
          <Text fontSize="1xl" fontFamily="monospace" fontWeight="bold">
            A.T.links
          </Text>
        </Flex>

        {LinkItems.map((link, index) => (
          <NavItem key={link.name} icon={link.icon} link={link?.link} id={link.id}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    )
}

export default SiderBarContent