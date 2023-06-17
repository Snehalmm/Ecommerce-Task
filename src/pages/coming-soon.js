import { Box, Text, Button, Flex, Link, Image } from "@chakra-ui/react";
import SiderBar from "../components/global/SiderBar";
import ComingSoonImage from '../assets/images/coming-soon.jpg';

export default function NotFound() {
  return (
    <Box bgColor={"#87CEEB"} padding="10px">
      <Flex justifyContent={"space-between"} width={"100%"}>
        <Box width={"100%"}>
          <Flex>
            <Box rounded={"lg"} width={"26%"} bgColor={"#fff"}>
              <SiderBar />
            </Box>
            <Box
              padding="20px"
              width={"74%"}
              rounded={"lg"}
              bgColor={"#fff"}
              marginLeft={"10px"}
            >
              <Box
                textAlign="center"
                // width={"75%"}
                py={10}
                px={6}
                bgColor={"#fff"}
              >
               <Image
                boxSize='100px'
                objectFit='cover'
                src={ComingSoonImage}
                alt='Dan Abramov'
                />
                <Text fontSize="18px" mt={3} mb={2}>
                  Coming Soon...
                </Text>
                <Text color={"gray.500"} mb={6}>
                  We're coming soon! We're working hard to give you the best experience!
                </Text>
                <Button
                //   colorScheme="teal"
                  color="white"
                  variant="solid"
                  className="gradinant-button"
                >
                  <Link href={"/"}>Go to Home</Link>
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
