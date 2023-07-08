import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Text,
    Icon,
    Image,
    Stack,
    Heading,
    SimpleGrid,
    Box,
    Input,
    FormLabel,
  } from '@chakra-ui/react';
import {IoMdClose}  from "react-icons/io"
import { useEffect, useState } from 'react';
import logo192 from '../../assets/images/epson.png'
import { useOrdersStore } from '../../store/orders';
import cartImg from "../../assets/images/emptyCart.png";
import { AddIcon, MinusIcon } from '@chakra-ui/icons';


function Description({isOpen, onClose, product, addToCart, setProductID}) {
    
  let uniqueColorVariants = []; 
  product?.variants.map((item) => {
    let isPresent = uniqueColorVariants.filter(function(elem) {
      return elem.colorCode === item.colorCode
    })
    if (isPresent.length === 0) { 
      uniqueColorVariants.push(item)
    }
  })

  let uniquePackegingVariants = []; 
  product?.variants.map((item) => { 
    let isPresent = uniquePackegingVariants.filter(function(elem) {
      return elem.packingCode === item.packingCode
    })
    if (isPresent.length === 0) { 
      uniquePackegingVariants.push(item)
    }
  })
  const [activeColor, setActiveColor] = useState(uniqueColorVariants?.[0])
  const [activePackeging, setActivePackeging] = useState(uniquePackegingVariants?.[0])
  const [colorState, setColorState] = useState(true)
  const [packeging, setPackeging] = useState(false)
  const setOrders = useOrdersStore((state) => state.setOrders);
  const orders = useOrdersStore((state) => state.orders);
  const deleteOrders = useOrdersStore((state) => state.deleteOrders);

  useEffect(()=>{
    if(product){
      setActiveColor(uniqueColorVariants?.[0]);
      setActivePackeging(uniquePackegingVariants?.[0])
      setColorState(true)
      setPackeging(false)
    }
  }, [product]);

  const addOrders = (item) => {
    let orderObj={}
    orderObj['productId']=product?.productId
    orderObj['image']=product?.productImages
    orderObj['name']=product?.itemDescription
    orderObj['salesDescription']= item?.saleDescription
    orderObj['currency']= product?.currency
    orderObj['price']= item?.grossPrice
    orderObj['id']= item?._id
    orderObj['qty']= 1
    setOrders(orderObj)
  }
    const onDeleteOreders = (id) =>{
      let exOrders=[...orders]
      const result = exOrders.filter((item)=> item.id!==id)
      deleteOrders([...result])
    }
    return (
      <Box>
        <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
          {product ===null && (
            <ModalHeader>No Data Found</ModalHeader>
          )}
          {product !==null && (
            <ModalHeader>{product?.itemDescription}</ModalHeader>
          )}
            <ModalCloseButton />
            {product !==null && (
            <>
                <ModalBody >
                 <Flex justifyContent={"space-between"}>
                  <Box width={"56%"}> 
                 <Box style={{display:"flex", justifyContent:"center", alignItems:"center"}} bgColor={"gray.200"} padding={5}>
                   <Image
                  src={`${product?.productImages?.length>0 ? product?.productImages[0]: logo192}`}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  height={200}
                  width={160}
                />
                </Box>
                <Stack mt='6' spacing='3'>
                <Text color='gray.600' fontSize='1xl'>
                    #{colorState? activeColor?.bpCatalogNumber: packeging? activePackeging?.bpCatalogNumber: null}
                  </Text>
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Heading size='md'>{product?.itemDescription}</Heading>
                  <Text color='black.600' fontWeight={"500"} fontSize='2xl'>
                    {product?.currency?.symbol}{colorState? activeColor?.grossPrice: packeging? activePackeging?.grossPrice: null}
                  </Text>
                  </Flex>
                  <Text>
                  {colorState? activeColor?.saleDescription: packeging? activePackeging?.saleDescription: null}
                  </Text>
                </Stack>
                <Heading size='md' mt={3} mb={3}>Please Select Color Description</Heading>
                <SimpleGrid columns={2} spacing={5}>
                {uniqueColorVariants.map((item, index)=>(
                  <Button 
                  className={activeColor?.colorCode=== item?.colorCode? 'button-active': 'button-normal'}
                   variant={activeColor?.colorCode=== item?.colorCode? 'solid': 'outline'} key={index}
                   onClick={() => {
                    setActiveColor(item) 
                    setColorState(true) 
                    setPackeging(false)
                   }}>
                    {item.colorDescription}
                  </Button>
                ))}
                </SimpleGrid>
                  <Heading size='md' mt={3} mb={3}>Please Select Packeging Description</Heading>
                  <SimpleGrid columns={2} spacing={5}>
                  {uniquePackegingVariants.map((item, index)=>(
                    <Button 
                      className={activePackeging?.packingCode=== item?.packingCode? 'button-active': 'button-normal'}
                      variant={activePackeging?.packingCode=== item?.packingCode? 'solid': 'outline'} key={index} 
                      onClick={()=> {
                          setActivePackeging(item)
                          setColorState(false) 
                          setPackeging(true)
                        }}>
                      {item.packingDescription}
                    </Button>
                  ))}
                </SimpleGrid>

                <Box my={4}>
                  <FormLabel htmlFor='qty' color="#1a202c" fontWeight={700}>Enter Quantity</FormLabel>
                  <Input type="text" name='qty' value={100} disabled placeholder='Enter Quantity'/>
                  <span className='cm-line-break error-text'>Minimum orders 12*</span>
                </Box>
                <Box my={4}>
                  <Flex alignItems={'center'}>
                  <input type="checkbox" id='check' name='check'/>
                  <FormLabel htmlFor='check' marginLeft={1} fontSize={'sm'} mb={0}> Need Urgent Order</FormLabel>
                  </Flex>  
                </Box>
                <Flex alignItems={"center"}  justifyContent={"center"}>
                <Button variant="outline" colorScheme="red" margin={"45px 0"}  padding={"10px 85px"} onClick={() => addOrders(colorState? activeColor:packeging? activePackeging : null)}>Add</Button>
                </Flex>
                   </Box>
                   {/* <Box borderRight={"1px solid"} borderColor={"gray.600"} width={"10%"} ></Box> */}
                   <Box width={"43%"}>
                   <Box bgColor="white" className='cart-container' position={"relative"}  >
                    <table className="table-container">
                      <tr className="table-head">
                        <th className="table-data">Products</th>
                        <th className="table-data">Quantity</th>
                        <th className="table-data">Amount</th>
                        <th className="table-data"></th>
                      </tr>
                      {orders?.length>0 && (orders?.map((item, index)=>{
                          return(
                            <tr>
                            <td className="table-data" key={index} onClick={()=> setProductID(item?.productId)} >
                              <div className="tb-prod-name" width={20}>
                                <span>
                                  {" "}
                                  <Image src={item?.image?.length>0 ? item?.image[0]: logo192} width={8} marginRight={"6px"} />
                                </span>
                                <p>
                                  <span className="cm-line-break prod-title prod-name">{item?.name} </span>
                                  <span className="cm-line-break prod-subtitle" color="gray.100">
                                  {item?.salesDescription}{" "}
                                  </span>
                                </p>
                              </div>
                            </td>
                            {/* <td className="table-data tb-prod-qty">{item?.qty}</td> */}
                            {/* <td className="table-data tb-prod-qty"><MinusIcon w={3} h={3} marginRight={3}/>{item?.qty}<AddIcon w={3} h={3} marginLeft={3}/></td> */}
                            <td className="table-data tb-prod-qty">{item?.qty}</td>
                            <td className="table-data tb-prod-amt">{item?.currency?.symbol} {item?.totalPrice? item?.totalPrice: item?.price}</td>
                            <td className="table-data tb-prod-amt" onClick={()=> onDeleteOreders(item.id)}><Icon as={IoMdClose} color="red.600" cursor={"pointer"}/></td>
                          </tr>
                          )
                        })
                      )}
                    </table>
                    
                    {orders?.length===0 && (
                    <Box >

                    <Flex justifyContent={"center"} alignItems={"center"} direction={"column"} marginY="150" marginX="auto">
                      <Image src={cartImg} width={20} />
                      <p>Items Not added Yet</p>
                    </Flex>
                    </Box>
                    
                    )}
                  </Box>
                    {orders?.length>0 &&
                    <Flex alignItems={"center"}  justifyContent={"center"} mt={10}>
                      <Button bg={"red.500"} color={"#FFF"} padding={"10px 85px"} onClick={addToCart}>Add to Cart</Button>
                    </Flex>}
                   </Box>
                 </Flex>
                </ModalBody>
      
            </>
            )}
          
          </ModalContent>
        </Modal>
      </Box>
    )
  }
export default Description;