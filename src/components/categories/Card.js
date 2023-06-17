import { Box, Heading, Image } from "@chakra-ui/react";
import logo192 from '../../assets/images/epson.png';

const CategoryCard = ({item, setSelectedCategory, setName}) => {

    return (
        <Box
          role={'group'}
          maxW={'150px'}
          pos={'relative'}
          onClick={()=> {
            setSelectedCategory(item.categoryId);
            setName(item.categoryName);
          }}
          zIndex={1}
        >
        <Box>
          <Image
           borderWidth={1}
           borderColor={"blackAlpha.500"}
           rounded={'lg'}
            objectFit={'contain'}
            height= {144}
            overflow= {'hidden'}
            src={item.categoryImageURL?.length>0 ? item.categoryImageURL: logo192}
          />
        </Box>
          <Heading fontSize={'20px'} color={"#fff"} fontFamily={'body'} fontWeight={500} mt={-15} position={'absolute'}  bottom={2}
            left={5}  textAlign={"center"}>
            {item.categoryName}
          </Heading>
      </Box>
    )
}

export default CategoryCard