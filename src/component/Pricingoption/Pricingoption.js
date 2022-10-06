import React from 'react';
import Feature from '../Feature/Feature';
import './Pricingoption.css'



const Pricingoption = ({ option }) => {
  console.log(option)
  const { features } = option;
  
   
    return (
      <div>
        <div className="bg-indigo-300 m-3 p-4 rounded-md">
          <h2 className="text-white">
            <span className="text-6xl ">{option.price}</span>
            <span>/mon</span>
          </h2>
          <h2>
            <span className="text-3xl">{option.name}</span>
          </h2>
          <div className='feature'>
            {
              features.map((feature, idx) => <Feature
                key={idx}
              feature={feature}
              ></Feature>)
            }
            <button className='bg-green-600 w-full my-3 p-3 text-white rounded-lg'>Buy Now </button>
          </div>
        </div>
      </div>
    );
};

export default Pricingoption;