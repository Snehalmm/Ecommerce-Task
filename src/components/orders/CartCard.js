import React from "react";
import { Box, Divider, Flex, Icon, Image } from "@chakra-ui/react";
import cartImg from "../../assets/images/emptyCart.png";
import { useOrdersStore } from "../../store/orders";
import logo192 from '../../assets/images/epson.png'
import { FaAngleRight } from "react-icons/fa";
import {HiPencil} from "react-icons/hi"
import CartDetails from "./CartDetails";
import inrFormat from "../../services/inrFormat";
import { toast } from "react-toastify";

const CartCard = ({onOpen}) => {
  const orders = useOrdersStore((state) => state.orders);
  
  return (
    <Box>
      <Box bgColor="white" position={"relative"} className="cart-container">
        <table className="table-container">
          <tr className="table-head">
            <th className="table-data">Products</th>
            <th className="table-data">Quantity</th>
            <th className="table-data table-flex">Price <Flex className="table-edit" justifyContent={"center"} alignItems={"center"} onClick={()=>toast.info("Coming soon...!")}><Icon as={HiPencil}/> Edit</Flex></th>
          </tr>
          {orders?.length>0 && (orders.slice(0, 4)?.map((item, index)=>{
              return(
                <>
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
                    <td className="table-data tb-prod-amt">{item?.currency?.symbol} {item?.totalPrice? inrFormat(item?.totalPrice): inrFormat(item?.price)}</td>
                  </tr>
                </>
             
              )
            })
          )}
         
        </table>
        {orders?.length>4 && (
          <>
              <Divider orientation='horizontal' />
                <Box className="cm-center" mt={1} onClick={onOpen}>
                <span className="cm-text">
                  See all
                </span>
                  <Icon as={FaAngleRight} 
                    color="red.500"  
                    size={"1xl"}
                  />
                </Box>
          </>
        )}
     
      {orders?.length===0 && (
        <Box >
        <Flex justifyContent={"center"} alignItems={"center"} direction={"column"} marginY="150" marginX="auto">
          <Image src={cartImg} width={20} />
          <p>Items Not added Yet</p>
        </Flex>
        </Box>
        )}
      {orders?.length > 0 && <CartDetails/>}
      </Box>
    </Box>
  );
};

export default CartCard;
