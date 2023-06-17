import { Grid, Heading } from '@chakra-ui/react';
import SubcategoryCard from './Card';

const SubCategories = ({data, loading, setSubCategoryID}) => {

    return (
      <>
          {loading && (
            <Heading as="h2" mb="8" fontSize="2xl">
                loading...
            </Heading>
          )}
          {data && data?.length>0 && (
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
              <SubcategoryCard key={index} item={item} setSubCategoryID={setSubCategoryID}/>
            ))}
            </Grid>
          )}
          {data && data?.length===0 && (
             <Heading as="h2" mb="8" fontSize="2xl">
                No Data Found
            </Heading>
          )}
      </>
    )
}

export default SubCategories