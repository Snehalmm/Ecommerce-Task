import { Box, Heading, Flex, Image } from '@chakra-ui/react';
import logo192 from '../../assets/images/epson.png';
import homeIcon from '../../assets/images/home-icon.jpg';


const Footer = ({data, setSubCategoryID, subCatgoryID}) => {
  return (
    <Box width="100%" rounded={"lg"} bgColor="#fff"  mt={3} padding={3} >
        <Flex  alignItems={"center"}>
            <Box
            borderWidth={1}
            borderColor={"blackAlpha.500"}
            rounded={'lg'}
            padding={3}
            onClick={()=> 
                setSubCategoryID(null)
            }
            >
                <Image
                    objectFit={'contain'}
                    overflow= {'hidden'}
                    src={homeIcon}
                    height={14}
                    width={65}
                    alignItems={"center"}
                />
            </Box>
            {data.map((item, index)=>{
                console.log("subCatgoryID", subCatgoryID, item.subCategoryId)
                return(
                        <Box
                            pos={'relative'}
                            borderWidth={1}
                            borderColor={"blackAlpha.500"}
                            rounded={'lg'}
                            style={{margin: "0 20px"}}
                            key={index}
                            onClick={()=> 
                            setSubCategoryID(item.subCategoryId)
                            }
                            // _hover={{
                            //     borderWidth:4,
                            //     borderColor:"red.400",
                            //     rounded:'lg'
                            //   }}
                    className={subCatgoryID===item?.subCategoryId? "active-card": ''}

                        >
                            <Image
                                objectFit={'fill'}
                                style={{width:"165px"}}
                                height={20}
                                alignItems={"center"}
                                overflow= {'hidden'}
                                src={item.subCategoryImageURL?.length>0 ? item.subCategoryImageURL: logo192}
                            />
                            <Heading fontSize={'12px'} color={"black"} fontFamily={'body'} fontWeight={700} mt={-15} position={'absolute'}  bottom={2} left={10}  textAlign={"center"}>
                                {item.subCategoryName}
                            </Heading>
                        </Box>
                )
            })}
        </Flex>
    </Box>
  );
};

export default Footer;



// <Box width="100%" bgColor="#fff" p={4} >
// <Grid
//     templateColumns={{
//         sm: "1fr",
//         md: "1fr 1fr",
//         lg: "1fr 1fr 1fr",
//         xl: "1fr 1fr 1fr 1fr",
//     }}
//     gap="4"
// > 
// <Box
//     role={'group'}
//     maxW={'200px'}
//     pos={'relative'}
//     zIndex={1}
    // onClick={()=> 
    //     setSubCategoryID(null)
    //   }
// >
//     <Box>
//         <Image
//             borderWidth={1}
//             borderColor={"blackAlpha.500"}
//             rounded={'lg'}
//             objectFit={'contain'}
//             height= {120}
//             overflow= {'hidden'}
//             src={homeIcon}
//         />
//     </Box>
// </Box>
// {/* {products.map((item, index)=>{ */}
// {data.map((item, index)=>{
//     return(
//         <Box
//             role={'group'}
//             maxW={'200px'}
//             pos={'relative'}
//             zIndex={1}
//             key={index}
            // onClick={()=> 
            //     setSubCategoryID(item.subCategoryId)
            //   }
//             >
//             <Box>
//                 <Image
//                     borderWidth={1}
//                     borderColor={"blackAlpha.500"}
//                     rounded={'lg'}
//                     objectFit={'contain'}
//                     height= {120}
//                     overflow= {'hidden'}
//                     src={item.subCategoryImageURL?.length>0 ? item.subCategoryImageURL: logo192}
//                     // src={item.image?.length>0 ? item.image: logo192}
//                 />
//             </Box>
//             <Heading fontSize={'20px'} color={"#fff"} fontFamily={'body'} fontWeight={500} mt={-15} position={'absolute'}  bottom={2} left={5}  textAlign={"center"}>
//                 {item.subCategoryName}
//                 {/* {item.category} */}
//             </Heading>
//         </Box>
//     )
// })}
// </Grid>
// </Box>