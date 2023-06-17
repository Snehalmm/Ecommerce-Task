import { Box, Heading, Icon, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import logo192 from '../../assets/images/epson.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubcategoryCard = ({item, setSubCategoryID}) => {
  const navigate = useNavigate();
    // const [isOpen, setIsOpen]= useState(false);
    // const [subCatgoryID, setSubCategoryID] = useState(null);

    // const onOpen =(id)=>{
    //   setIsOpen(true);
    //   setSubCategoryID(id)
    // }
    // const onClose =()=>{
    //   setIsOpen(false);
    // }
    return (
      <>
        <Box
            role={'group'}
            maxW={'180px'}
            borderWidth={1}
            borderColor={"blackAlpha.500"}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.800')}
            pos={'relative'}
            zIndex={1}
            onClick={()=> 
              setSubCategoryID(item.subCategoryId)
            }
          >
          <Box>
            <Image
              rounded={'lg'}
              height={130}
              width={200}
              objectFit={'cover'}
              src={item.subCategoryImageURL?.length>0 ? item.subCategoryImageURL: logo192}
            />
          </Box>
            <Heading fontSize={'16px'} pt={2} pb={2} align={'center'} fontFamily={'body'} fontWeight={500}>
              {item.subCategoryName}
            </Heading>
        </Box>
        {/* <Description onClose={onClose} isOpen={isOpen} subCatgoryID={subCatgoryID}/> */}
      </>
      
    )
}

export default SubcategoryCard;