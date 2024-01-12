import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CardProducts from './CardProducts';
import CardCoutures from './CardCoutures';

function Category() {
  const productData = useSelector((state) => state.product.productList);
  const uniqueSubcategory2Values = [...new Set(productData.map(product => product.subcategory1).filter(subcategory1 => subcategory1))];
  const [selectedSubcategory1, setSelectedSubcategory1] = useState(null);
  const [subcategory1Visibility, setSubcategory1Visibility] = useState({});
  const [dropDown, setDropDown] = useState(false);

  const handleItemClick = (subcategory1) => {
    if (selectedSubcategory1 === subcategory1) {
      // If reclicked, toggle visibility
      setSubcategory1Visibility(prevVisibility => ({
        ...prevVisibility,
        [subcategory1]: !prevVisibility[subcategory1],
      }));
    } else {
      // If a new subcategory is clicked, update visibility and selectedSubcategory2
      setSubcategory1Visibility({ [subcategory1]: true });
      setSelectedSubcategory1(subcategory1);
    }

    // Toggle category dropdown
    setDropDown(!dropDown);
  };

  return (
    <>
      <div className={`bg-slate-800  flex text-center ${dropDown ? 'active' : ''}`} onClick={() => handleItemClick(null)}>
        {uniqueSubcategory2Values.map((subcategory1, index) => (
          <div
            key={index}
            style={{ fontSize: "30px" }}
            className={`flex-1 flex items-center justify-center font-great-vibes cursor-pointer hover:bg-yellow-500 p-2 ${selectedSubcategory1 === subcategory1 ? 'bg-yellow-500' : ''}`}
            onClick={() => handleItemClick(subcategory1)}
          >
             {subcategory1}
          </div>
        ))}
      </div>
      <div style={{ borderRadius: "0 0 20px 20px", maxHeight: '500px', overflowY: 'auto' }} className={`pl-12 pr-12 bg-slate-800 mb-10 pb-3 grid grid-cols-5 gap-4 ${subcategory1Visibility[selectedSubcategory1] ? '' : 'invisible'}`}>
        {productData
          .filter(product => product.subcategory1 === selectedSubcategory1)
          .map(el => (
            <div
              key={el._id}
              className={`w-full mt-3 `}
            >
              {el.subcategory && el.subcategory.toLowerCase() === "produits" ? (
                <CardProducts
                  id={el._id}
                  name={el.name}
                  description={el.description}
                  price={el.price}
                  image={el.image}
                />
              ) : (
                <CardCoutures
                  id={el._id}
                  name={el.name}
                  description={el.description}
                  price={el.price}
                  image={el.image}
                />
              )}
            </div>
          ))}
      </div>
    </>
  );
}

export default Category;
