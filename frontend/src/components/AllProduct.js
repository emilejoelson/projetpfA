import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "./CardFeature";
import FilterProduct from "./FilterProduct";
import { Typography} from "@mui/material";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";

const AllProduct = ({ heading}) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];

///Import Theme
const theme = useTheme();
const colors = tokens(theme.palette.mode);

  //filter data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    setFilterBy(category)
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <div className="my-5">
     
      <Typography  variant="h2"
       color={colors.grey[100] }
       fontWeight="bold"
       sx={{ m: "28px 0px 29px 0" }}
      >
           {heading} 
      </Typography>

         <div className="flex gap-4 justify-center overflow-hidden scrollbar-none">
          {categoryList[0] ? (
            categoryList.map((el) => {
              return (
                <FilterProduct
                  category={el}
                  key={el}
                  isActive={el.toLowerCase() === filterby.toLowerCase()}
                  onClick={() => handleFilterProduct(el)}
                />
              );
            })
          ) : (
            <div className="min-h-[150px] flex justify-center items-center">
              <p>Chargement...</p>
            </div>
          )}
         </div>
      

      <div className=" bg-sky-900 rounded  w-[92%] ml-[4%] py-[1%]  ">
        <div className="flex rounded  w-[95%] ml-[3%] py-0 flex-wrap justify-center gap-4 my-4  overflow-hidden scrollbar-none">
            {dataFilter[0]
              ? dataFilter.map((el) => {
                  return (
                    <div className="  w-[13%]"> 
                          <CardFeature
                              key={el._id}
                              id={el._id}
                              image={el.image}
                              name={el.name}
                              category={el.category}
                              price={el.price}

                            />
                    </div>
                  );
                })
              : 
              loadingArrayFeature.map((el,index) => (
                  <CardFeature loading="Chargement..." key={index+"allProduct"} />
                ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
