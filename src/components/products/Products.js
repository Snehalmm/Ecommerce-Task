import { useState } from "react";
import { Heading, Grid, Box } from "@chakra-ui/react";
import ProductCard from "./Card";
import Description from './Modal';

function Categories({data}) {
    const [isOpen, setIsOpen]= useState(false);
    const [product, setProduct] = useState(null);

    const onOpen =(item)=>{
      setIsOpen(true);
      setProduct(item)
    }
    const onClose =()=>{
      setIsOpen(false);
    }
    return (
      <>
       <Box>
            <Heading as="h2" mb="8" fontSize="2xl">
                {"All Products"}
            </Heading>
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
        </Box>
        <Description onClose={onClose} isOpen={isOpen} product={product}/>
      </>
    )
  }
export default Categories;