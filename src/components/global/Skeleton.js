import React from "react";
import {
  Grid, Skeleton,
} from "@chakra-ui/react";

const Skeletons = () => {
  return (
    <Grid
        templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr 1fr",
        xl: "1fr 1fr 1fr 1fr",
        }}
        gap="4"
    >
            {Array(4).fill(null).map(item => (
                <Skeleton
                    height='144px'
                    width={'150px'}
                    isLoaded={false}
                    bg='green.500'
                    color='white'
                    fadeDuration={1}>
                </Skeleton>
            ))}
    </Grid>
  );
};

export default Skeletons;