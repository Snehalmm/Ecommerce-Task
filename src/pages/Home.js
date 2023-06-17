import { Heading, Flex, Box } from "@chakra-ui/react";
import { FetchData } from "../api/useApi";
import { getAPiEndpoint } from "../api/apiEndpoints";
import CartCard from "../components/orders/CartCard";
import { useEffect, useState } from "react";
import Categories from '../components/categories/Categories';
import Footer from "../components/categories/Footer";
import Products from '../components/products/Products';
import SiderBar from "../components/global/SiderBar";
import { ToastContainer } from 'react-toastify';
import OrderModal from '../components/orders/Modal';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subCategory, setSubCategory] = useState([]);
  const [subCatgoryID, setSubCategoryID] = useState(null);
  const [isOpenOrder, setIsOpenOrder] = useState(false);

  const [name, setName] = useState(null);

  const categoriesAction = {
    select: (data) => {
      const list = data.data.result;
      return list;
    },
    enabled: true,
  };

  const {
    data: categoriesData,
    isLoading: isLoadingCatgories,
  } = FetchData(
    "categoriesData",
    getAPiEndpoint("categories"),
    categoriesAction
  );
 
  useEffect(() => {
    if (categoriesData) {
      setSelectedCategory(categoriesData?.[0]?.categoryId);
      setName(categoriesData?.[0]?.categoryName);
    }
  }, [categoriesData]);

  const productsAction = {
    select: (data) => {
    const list = data.data.result;
    return list;
    },
    enabled: false,
  };

  const {
      data: productsData,
      isLoading: isLoadingProducts,
      refetch: refetchProducts
  } = FetchData(
      "productsData",
      getAPiEndpoint("products", `${subCatgoryID}.json`),
      productsAction
  );

  useEffect(()=>{
    if(subCatgoryID){
      refetchProducts()
    }
  },[subCatgoryID]);

  const onCloseOrders = () => {
    setIsOpenOrder(false);
  }

  const onOpenOrders = () => {
    setIsOpenOrder(true);
  }

  return (
    <>
      <Box bgColor={"gray.300"} padding="10px">
        <Flex justifyContent={"space-between"} width={"100%"}>
        <Box width={"74.5%"} >
        <Flex height={subCatgoryID===null ? '100%': ''}>
          <Box rounded={"lg"} width={"26%"} bgColor={"#fff"} >
            <SiderBar/>
          </Box>
          <Box padding="20px" width={"74%"} rounded={"lg"} bgColor={"#fff"} marginLeft={"10px"} 
            style={{height: subCatgoryID===null ? "": "500px", overflow: "auto"}}>
            {isLoadingCatgories && (
              <Heading as="h2" mb="8" fontSize="2xl">
                  loading...
              </Heading>
            )}
          
            {subCatgoryID===null ? (
              categoriesData && categoriesData?.length>0 && (
                <Categories name={name} selectedCategory={selectedCategory} categoriesData={categoriesData} setName={setName} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSubCategoryID={setSubCategoryID} setSubCategory={setSubCategory}/>
              )
            ):(
             <Products data={productsData} isLoadingProducts={isLoadingProducts}/>
            )}
          </Box>
        </Flex>
        {subCatgoryID?.length>0  && <Footer data={subCategory} setSubCategoryID={setSubCategoryID} />}
       </Box>
        <Box bgColor={"#fff"} rounded={"lg"} width={"24%"} marginLeft={"10px"}>
          <CartCard onOpen={onOpenOrders}/>
        </Box>
        <OrderModal isOpen={isOpenOrder} onClose={onCloseOrders}/>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
        </Flex>
      </Box>
     
   </>
  );
};

export default HomeScreen;
