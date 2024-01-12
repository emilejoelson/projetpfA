import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CardFeaturerdv from './CardFeaturerdv';
import CardFeature from './CardFeature';
import Footer from './Footer';

// Replace 'CardFeature' and 'CardFeaturerdv' with your actual card components

function ProductSearch() {
  const { query } = useParams();

  const productData = useSelector((state) => state.product.productList);

  // Define the keys to search within your product data
  const keys = ["name", "category","subcategory","subcategory1","subcategory2", "price", "description"];

  // Filter products based on the search query
  const filteredProducts = productData.filter((product) =>
    keys.some(
      (key) =>
        product[key] &&
        product[key].toLowerCase().includes(query.toLowerCase())
    )
  );
  const isMobile = window.innerWidth < 768;
  return (
    <div>
      {
        isMobile?
        (
          <div className="bg-orange-200 pt-8 mt-[9em]">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((el) => (
              <div key={el._id} className="w-full hover:scale-110">
                {/* Replace with your card components */}
                {el.subcategory && el.subcategory.toLowerCase() === "produits" ? (
                  <CardFeature
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    subcategory={el.subcategory}
                    price={el.price}
                  />
                ) : (
                  <CardFeaturerdv
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    subcategory={el.subcategory}
                    price={el.price}
                  />
                )}
              </div>
            ))}
          </div>
          <Footer />
        </div>
        
        )
         :
         (
          <div className="bg-orange-200 pt-8  ">
            <div className="ml-[200px] flex flex-wrap -mx-2">
              {filteredProducts.map((el) => (
                <div key={el._id} className="w-full hover:scale-110 h-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
                  {/* Replace with your card components */}
                  {el.subcategory && el.subcategory.toLowerCase() === "produits"  ? (
                    <CardFeature
                      id={el._id}
                      image={el.image}
                      name={el.name}
                      subcategory={el.subcategory}
                      price={el.price}
                    />
                  ) : (
                    <CardFeaturerdv
                      id={el._id}
                      image={el.image}
                      name={el.name}
                      subcategory={el.subcategory}
                      price={el.price}
                    />
                  )}
                </div>
              ))}
            </div>
            <Footer/>
          </div>
    
         )
      }
    </div>
  );
}

export default ProductSearch;
