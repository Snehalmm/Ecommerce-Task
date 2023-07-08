import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Flex,
    Image,
    Box,
  } from '@chakra-ui/react';
import logo192 from '../../assets/images/epson.png'
import { useOrdersStore } from '../../store/orders';
import cartImg from "../../assets/images/emptyCart.png";


function Orders({isOpen, onClose}) {
  const cartItems = useOrdersStore((state) => state.cartItems);
    return (
      <Box>
        <Modal size={"md"} isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{"Order List"}</ModalHeader>
            <ModalCloseButton />
                <ModalBody >
                <Box bgColor="white" height={600} position={"relative"}>
                    <table className="table-container">
                    <tr className="table-head">
                        <th className="table-data">Products</th>
                        <th className="table-data">Quantity</th>
                        <th className="table-data">Price</th>
                    </tr>
                    {cartItems?.length>0 && (cartItems?.map((item, index)=>{
                        return(
                            <tr>
                            <td className="table-data" key={index}>
                            <div className="tb-prod-name" width={20}>
                                <span style={{marginRight:"10px"}}>
                                {" "}
                                <Image src={item?.image?.length>0 ? item?.image[0]: logo192} width={9} />
                                </span>
                                <p>
                                <span className="cm-line-break prod-title">{item?.name} </span>
                                <span className="cm-line-break prod-subtitle" color="gray.100">
                                {item?.salesDescription}{" "}
                                </span>
                                </p>
                            </div>
                            </td>
                            <td className="table-data tb-prod-qty">{item?.qty}</td>
                            <td className="table-data tb-prod-amt">{item?.currency?.symbol} {item?.totalPrice? item?.totalPrice: item?.price}</td>
                        </tr>
                        )
                        })
                    )}
                    </table>
                    {cartItems?.length===0 && (
                    <Box >
                    <Flex justifyContent={"center"} alignItems={"center"} direction={"column"} marginY="150" marginX="auto">
                        <Image src={cartImg} width={20} />
                        <p>Items Not added Yet</p>
                    </Flex>
                    </Box>
                    )}
                </Box>
                </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    )
  }
export default Orders;