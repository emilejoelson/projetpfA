import React from 'react';
import { useSelector } from 'react-redux';
import CardFeaturerdv from './CardFeaturerdv';
import Footer from './Footer';

function CoiffureHomme() {
  const productData = useSelector((state) => state.product.productList);

  const filteredProducts = productData.filter((el) => {
    return (
      el.subcategory1 &&
      el.subcategory1.toLowerCase() === "coiffure" &&
      el.subcategory2 &&
      el.subcategory2.toLowerCase() === "homme"
    );
  });

  return (
    <div className="bg-orange-200 pt-8">
      <div className="ml-[200px] flex flex-wrap justify-center">
        {filteredProducts.map((el) => (
          <div key={el._id} className="w-full hover:scale-110 h-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
            <CardFeaturerdv
              id={el._id}
              image={el.image}
              name={el.name}
              subcategory={el.subcategory}
              price={el.price}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CoiffureHomme;
