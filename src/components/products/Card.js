import { Box, Flex, Heading, Icon, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import logo192 from '../../assets/images/epson.png'
import { toast } from "react-toastify";

const ProductCard = ({item, onOpen}) => {
    return (
      <Box position={"relative"}>
         <Box
          role={'group'}
          p={2}
          height={200}
          cursor={"pointer"}
          bg={useColorModeValue('white', 'gray.800')}
          borderWidth={1}
          borderColor={"blackAlpha.500"}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          onClick={() => onOpen(item)}
        >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image
            height={100}
            width={100}
            objectFit={'contain'}
            src={item.productImages?.length>0 ? item.productImages[0]: logo192}
          />
        </Flex>
        <Stack pt={2} align={'left'} height={20}>
          <Heading fontSize={"16px"} fontFamily={'body'} fontWeight={500} className="prod-name">
            {item.itemDescription}
          </Heading>
          <Text color={'gray.500'} fontSize={'sm'} width={"100"} className="description-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit.
          </Text>
        </Stack>
      </Box>
        <Icon as={FaRegHeart} color="red.500"  position="absolute"
            top={3}
            cursor={"pointer"}
            right={3} 
            size={"1xl"}
            zIndex={2}
            onClick={()=> toast.info("Coming Soon!")}
        />
      </Box>
    )
}

export default ProductCard;