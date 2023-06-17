
import { Box, Flex, Icon, Button } from "@chakra-ui/react";
import {HiOutlineChevronRight} from "react-icons/hi"
import { useOrdersStore } from "../../store/orders";
import inrFormat from "../../services/inrFormat";
import { toast } from "react-toastify";


function CartDetails() {
  const cartDetails = useOrdersStore((state) => state.cartDetails);
  const emptyCart = useOrdersStore((state) => state.clearCart);
  const clearCart=()=>{
    toast.success("Cart has been cleared")
    emptyCart()
  }
  const placeOrder=()=>{
    toast.success("Order has been placed!")
    setTimeout(()=>{
        emptyCart()
    }, 3000)
  }
    return (
    <>
    <Box bgColor={"gray.400"} mt={1}>
        <Flex justifyContent={"space-between"} padding={"10px"}>
        <span style={{color:"#000", fontWeight:"600"}}>
            Other Instruction
        </span>
        <span style={{color:"red"}}>
            <Flex alignItems={"center"} justifyContent={"center"}>
            <span style={{fontSize:"14px", fontWeight:"600"}} onClick={()=>toast.info("Coming soon...!")}>Add</span>
            <Icon as={HiOutlineChevronRight} color={"red.500"}/>
            </Flex>
        </span>
        </Flex>
    </Box>
    <Box bgColor={"#fff"} padding={3}>
    <span style={{color:"#000", fontWeight:"600"}}>
    Purchase Order Number:
    </span>
    <Box style={{color:"#000", background:"#a0aec0", borderRadius:"2px", padding:"6px"}} mt={3} >
    <span  style={{color:"#000", fontWeight:"600"}}>
    1011564321
    </span>
    </Box>
    </Box>

    <Box bgColor={"#fff"} padding={3}>
    <Flex justifyContent={"space-between"}>
    <span style={{color:"#000", fontWeight:"600"}}>
        Addresses
    </span>
    <span style={{color:"red"}}>
        <Flex alignItems={"center"} justifyContent={"center"}>
            <span style={{fontSize:"14px", fontWeight:"600"}} onClick={()=>toast.info("Coming soon...!")}>View</span>
            <Icon as={HiOutlineChevronRight} color={"red.500"}/>
        </Flex>
    </span>
    </Flex>

    <span  className="simple-text">
    Office : 28, Rajasthani Udhyog Nagar, G.T.karnala ....
    </span>
    
    </Box>

    <Box bgColor={"#fff"} padding={3}>
    <Flex justifyContent={"space-between"}>
    <span>Items total</span>
            <span>₹ {inrFormat(cartDetails?.itemsPrice)}</span>
    </Flex>
    <Flex  justifyContent={"space-between"} margin={"15px 0"}>
    <span className="simple-text">SGST (9%)</span>
            <span className="simple-text">₹ {inrFormat(cartDetails?.sgst)}</span>
    </Flex>
    <Flex  justifyContent={"space-between"} margin={"15px 0"}>
    <span className="simple-text">CGST (9%)</span>
            <span className="simple-text">₹ {inrFormat(cartDetails?.cgst)}</span>
    </Flex>
    <Flex  justifyContent={"space-between"} margin={"15px 0"}>
    <span className="simple-text">IGST (9%)</span>
            <span className="simple-text">₹ {inrFormat(cartDetails?.igst)}</span>
    </Flex>
    <Flex  justifyContent={"space-between"} margin={"15px 0"}>
    <span className="simple-text">Taxable Amount</span>
            <span className="simple-text">₹ {inrFormat(cartDetails?.taxAmount)}</span>
    </Flex>
    <Flex  justifyContent={"space-between"} margin={"15px 0"}>
    <span className="simple-text final-amt">Order Total</span>
            <span className="simple-text final-amt">₹ {inrFormat(cartDetails?.grantTotal)}</span>
    </Flex>
    </Box>
    <Box padding={3}>
    <Flex justifyContent={"space-between"}>
    <Button variant="outline" colorScheme="red"  padding={"10px 25px"} onClick={clearCart}>Clear Cart</Button>

    <Button bg={"red.500"} color={"#FFF"} padding={"10px 25px"} onClick={placeOrder}>Place Order</Button>
    </Flex>
    </Box>
    </>
    )
  }
export default CartDetails;