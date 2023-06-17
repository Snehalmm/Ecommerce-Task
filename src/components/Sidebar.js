import React from 'react';
import {
  Box,
  Icon,
  Text,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FaThLarge, FaHeart, FaCubes, FaCertificate, FaBox } from "react-icons/fa";

const LinkItems = [
  { name: 'Dashboard', icon: FaThLarge },
  { name: 'All Products', icon: FaCubes },
  { name: 'Orders', icon: FaBox },
  { name: 'Favourites', icon: FaHeart },
  { name: 'New Arrival', icon: FaCertificate },
];

export default function Sidebar() {
  return(
      <Box>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          A.T.links
        </Text>
        {LinkItems.map((link) => (
            <MenuList key={link.name}>
              <MenuItem>
                <Icon as={link.icon} mr={2} />
                {link.name}
              </MenuItem>
            </MenuList>
        ))}
      </Box>
  )
      
};