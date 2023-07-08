import { useEffect, useState } from "react";
import { Heading, Grid, Box } from "@chakra-ui/react";
import ProductCard from "./Card";
import Description from './Modal';
import Skeletons from "../global/Skeleton";
import { useOrdersStore } from "../../store/orders";

function Categories({data, isLoadingProducts, isEditOrder, productID, setIsEditOrder, setProductID }) {
    const [isOpen, setIsOpen]= useState(false);
    const [product, setProduct] = useState(null);
    const orders = useOrdersStore((state) => state.orders);
    const cartItems = useOrdersStore((state) => state.cartItems);
    const setAddToCart = useOrdersStore((state) => state.setAddToCart);
    const setProducts = useOrdersStore((state) => state.setProducts);
    const products = useOrdersStore((state) => state.products);

    const onOpen =(item)=>{
      setIsOpen(true);
      setProduct(item)
    }
    const onClose =()=>{
      setIsOpen(false);
      setIsEditOrder(false)
    }
    const addToCart =()=>{
      onClose()
      setAddToCart(orders)
    }
    useEffect(()=>{
      if(isEditOrder){
        setIsOpen(isEditOrder)
        let getItem= products.find((item)=> item.productId === cartItems[0]?.productId)
        setProduct(getItem)
      }
     
    }, [isEditOrder]);

    useEffect(()=>{
      if(productID){
        let getItem= products.find((item)=> item.productId === productID)
        setProduct(getItem)
      }
    }, [productID]);

    useEffect(()=> {
      if(data){
        setProducts(data)
      }
    }, [data]);
    
    return (
      <>
       <Box>
            <Heading as="h2" mb="8" fontSize="2xl">
                {"All Products"}
            </Heading>
            {isLoadingProducts && (
              <Skeletons/>
            )}
            {data && data?.length===0 && (
             <Heading as="h2" mb="8" fontSize="2xl">
                No Products Found
            </Heading>
          )}
          {data?.length>0 && (
            <Box paddingY={"20px"} paddingX="10px">
            <Grid
                templateColumns={{
                    sm: '1fr',
                    md: '1fr 1fr',
                    lg: '1fr 1fr 1fr',
                    xl: '1fr 1fr 1fr',
                }}
                gap='4'
            >
                {data.map((item, index) => (
                    <ProductCard key={index} item={item} onOpen={onOpen}/>
                ))}
            </Grid>
            </Box>
          )}
        </Box>
        <Description onClose={onClose} isOpen={isOpen} product={product} addToCart={addToCart} setProductID={setProductID} />
      </>
    )
  }
export default Categories;