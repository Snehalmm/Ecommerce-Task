import { useEffect } from "react";
import { getAPiEndpoint } from "../../api/apiEndpoints";
import { FetchData } from "../../api/useApi";
import SubCategory from "../subcategories/SubCategories";
import { Heading, Grid, Box, Flex, Select } from "@chakra-ui/react";
import CategoryCard from "./Card";
import SearchBar from "../global/SearchBar";
import { TriangleDownIcon } from "@chakra-ui/icons";

function Categories({name, selectedCategory, categoriesData, setName, setSelectedCategory, setSubCategoryID, setSubCategory}) {
    const subCategoriesAction = {
        select: (data) => {
          const list = data.data.result;
          return list;
        },
        enabled: false,
        onSuccess: (data) => {
          setSubCategory(data)
        },
      };
    const {
        data: subCategoriesData,
        isFetching: isFetchingSubCategories,
        refetch: refetchSubCategories,
      } = FetchData(
        "subCategoriesData",
        getAPiEndpoint("subcategories", `${selectedCategory}.json`),
        subCategoriesAction
      );

      useEffect(() => {
        if (selectedCategory) {
          refetchSubCategories();
        }
      }, [ selectedCategory ]);
    
    return (
      <>
      
       <Box>
        <Box>
          <Flex justifyContent={"space-between"} alignItems="center"  mb="5">
            <Heading as="h2" fontSize="2xl">
                {name}
            </Heading>
              <Box>
              <Flex alignItems="center" justifyContent="end">
              <SearchBar width="55%" size={"sm"}/>
              <Select placeholder='filter' size='sm' width="28"  marginLeft={2} icon={<TriangleDownIcon />} iconSize={10}/>
              </Flex>
              </Box>
          </Flex>

        </Box>
                <Box
                  borderBottom="1px solid"
                  borderColor={"blackAlpha.500"}
                  paddingY={"20px"}
                  paddingX="10px"
                >
                  <Grid
                    templateColumns={{
                      sm: "1fr",
                      md: "1fr 1fr",
                      lg: "1fr 1fr 1fr",
                      xl: "1fr 1fr 1fr 1fr",
                    }}
                    gap="4"
                  >
                    {categoriesData?.map((item, index) => (
                      <CategoryCard
                        key={index}
                        item={item}
                        setSelectedCategory={setSelectedCategory}
                        setName={setName}
                        selectedCategory={selectedCategory}
                      />
                    ))}
                  </Grid>
                </Box>
                <Box paddingY={"20px"} paddingX="10px">
                  {selectedCategory && <SubCategory data={subCategoriesData} loading={isFetchingSubCategories} setSubCategoryID={setSubCategoryID} />}
                </Box>
            </Box>
      </>
    )
  }
export default Categories;