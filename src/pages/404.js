import { Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/react";
import SiderBar from "../components/global/SiderBar";

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
                <Heading
                  display="inline-block"
                  as="h2"
                  size="2xl"
                  bgGradient="linear(to-r, teal.400, teal.600)"
                  backgroundClip="text"
                >
                  404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                  Page Not Found
                </Text>
                <Text color={"gray.500"} mb={6}>
                  The page you're looking for does not seem to exist
                </Text>
                <Button
                  // colorScheme="teal"
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
