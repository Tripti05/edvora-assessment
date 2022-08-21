import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Button } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
    const {currentColor} = useStateContext();
  
    return (
    <div className="mt-24">
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9 m-3  bg-center bg-hero-pattern bg-no-repeat bg-contain">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-bold text-gray-400" >Customers</p>
                        <p className="text-2xl" >12+ Millions</p>
                    </div>
                    <div className="mt-6" >
                        <Button
                            color="white"
                            bgColor={currentColor}
                            text="Download"
                            borderRadius="10px"
                            size = "md"
                        />                      
                    </div>      
                </div>
            </div>
        </div>

        <div className="flex gap-10 flex-wrap justify-center">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
            <div className="flex justify-between">
            <p className="font-semibold text-xl">Users Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Stock</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Selling Price</span>
              </p>
            </div>
          </div>



            </div>
        </div>

    </div>
  )
}

export default Ecommerce
