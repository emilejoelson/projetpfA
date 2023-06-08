import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AllProduct from '../components/AllProduct';
import { addCartItem } from '../redux/productSlide';
import Footer from '../components/Footer';


const Menu = () => {
  const {filterby}= useParams()
  const navigate= useNavigate();
  const dispatch= useDispatch();
const productData = useSelector(state => state.product.productList)

const productDisplay = productData.filter(el => el._id == filterby)[0]
console.log(productDisplay);

const handleAddCartProduct = (e) => {
  dispatch(addCartItem (productDisplay))
};

const handleBuy = () => {
  dispatch(addCartItem (productDisplay));
  navigate("/cart");
}

  return (
    <div>
    <div  className="p-2 md:p-4">
      <div className="w-1/2 max-w-4xl m-auto md:flex bg-teal-700">
        <div className="max-w-sm  overflow-hidden w-[67%] p-5">
            <img src={productDisplay.image} className="hover:scale-105 transition-all h-full" />
        </div>
        <div>
        <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-orange-600  capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className=" text-slate-900  font-medium text-2xl">{productDisplay.category}</p>
           <p className=" font-bold md:text-2xl">
              <span>{productDisplay.price}{" "}</span>
              <span className="text-red-500">dh</span>
           </p>
           <div className="py-4">
                <button className="  bg-sky-900 py-1 mt-2 rounded hover:bg-green-400 min-w-[100px]">
                  <Link
                   to ={"/"}
                  onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
                  >
                      Retour 
                  </Link>
                  
                </button>
                <button onClick={handleAddCartProduct} className="bg-yellow-500 py-1 mt-2 rounded hover:bg-green-400  min-w-[100px]">
                  Acheter
                </button>
           </div>
           <div className="py-4">
            <p className="text-green-500 font-bold">Description : </p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
        </div>
      </div>
      <AllProduct  heading={"Produits Associés"}/>
      
    </div>
    <Footer/>
    </div>
  );
}

export default Menu;
