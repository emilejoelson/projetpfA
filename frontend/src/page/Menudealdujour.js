import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AllProduct from '../components/AllProduct';
import Footer from '../components/Footer';
import { fetchCurrentDealdujour } from '../redux/dealdujourSlide';

const Menudeal = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const currentDealdujourData = useSelector(state => state.dealdujour.currentDealdujour);
  
  // Use optional chaining to safely access properties
  const productDisplay = currentDealdujourData?.find(el => el._id === filterby);

  useEffect(() => {
    // Fetch data only if filterby is available
    if (filterby) {
      dispatch(fetchCurrentDealdujour());
    }
  }, [dispatch, filterby]);

  // Add console.log statements
  console.log("Filter By:", filterby);
  console.log("Current Dealdujour Data:", currentDealdujourData);
  console.log("Product Display:", productDisplay);


  const isMobile = window.innerWidth < 768;

  return (
    <div>
      {isMobile ? (
        <div className="mt-[9em] ">
          <div className="max-w-4xl m-auto md:flex bg-slate-100">
            <div className="max-w-sm overflow-hidden flex items-center justify-center mt-10 ">
              <img src={productDisplay?.image} className="hover:scale-105 transition-all h-full" />
            </div>
            <div>
              <div className="flex flex-col gap-1 mt-5">
                <h3 className="font-sans text-[#cfa756d8] capitalize text-2xl md:text-4xl">
                  {productDisplay?.name}
                </h3>
                <p className="text-slate-900 font-great-vibes text-2xl ">{productDisplay?.category}</p>
                {typeof productDisplay?.price === 'string' ? (
                  <span>
                    <span className="text-red-500 line-through font-italic">
                      {parseFloat(productDisplay?.price).toFixed(2)} dh{' '}
                    </span>
                    <br />
                    <span className="text-[#0A0A0A] font-bold font-script">
                      {(parseFloat(productDisplay?.price) * 0.8).toFixed(2)} dh{' '}
                    </span>
                  </span>
                ) : (
                  <span>Price not available</span>
                )}
                <div className="pb-[6em] ">
                  <p className="text-[#0A0A0A] font-arial-narrow font-bold" style={{ fontSize: '20px' }}>
                    Description :
                  </p>
                  <p className="font-palatino text-[#333333] ">{productDisplay?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[-2.5em] mb-[-2.5em] ">
            <AllProduct heading={"PRODUITS ASSOCIES"} />
          </div>
          <Footer />
        </div>
      ) : (
        <div className="bg-white">
          <div className="p-2 md:p-4">
            <div className="w-1/2 max-w-4xl m-auto md:flex bg-slate-100">
              <div className="max-w-sm overflow-hidden w-[67%] p-5">
                {productDisplay?.image && (
                  <img src={productDisplay?.image} className="hover:scale-105 transition-all h-full" />
                )}
              </div>
              <div>
                <div className="flex flex-col gap-1 mt-5">
                  <h3 className="font-sans text-[#cfa756d8] capitalize text-2xl md:text-4xl">
                    {productDisplay?.name}
                  </h3>
                  <p className="text-slate-900 font-great-vibes text-2xl ">{productDisplay?.category}</p>
                  {typeof productDisplay?.price === 'string' ? (
                    <span>
                      <span className="text-red-500 line-through font-italic">
                        {parseFloat(productDisplay?.price).toFixed(2)} dh{' '}
                      </span>
                      <br />
                      <span className="text-[#0A0A0A] font-bold font-script">
                        {(parseFloat(productDisplay?.price) * 0.7).toFixed(2)} dh{' '}
                      </span>
                    </span>
                  ) : (
                    <span>Price not available</span>
                  )}
                  <div className="py-4">
                    <p className="text-[#0A0A0A] font-arial-narrow font-bold" style={{ fontSize: '20px' }}>
                      Description :
                    </p>
                    <p className="font-palatino text-[#333333] ">{productDisplay?.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <AllProduct heading={"PRODUITS ASSOCIES"} />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Menudeal;
