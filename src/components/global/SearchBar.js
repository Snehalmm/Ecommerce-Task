import React from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Box,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { toast } from "react-toastify";

const SearchBar = ({width, size}) => {
  return (
    <Box width={width}>
      <InputGroup borderRadius={5} size={size}>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input type="text" placeholder="Search..." border="1px solid #949494"  onClick={()=>toast.info("Coming soon...!")} borderRadius="5px"/>
        {/* <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494" 
            onClick={()=>toast.info("Coming soon...!")}
            >
            Search
          </Button>
        </InputRightAddon> */}
      </InputGroup>
    </Box>
  );
};

export default SearchBar;