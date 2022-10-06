import React from 'react';
import Pricingoption from '../Pricingoption/Pricingoption';

const Pricing = () => {
    const pricingOption = [
      {
        id: 1,
        name: "free",
        price: 9.9,
            features: [
            "everything on free",
          "awesome feature",
          "Extra feature",
          "unnessesary feature",
          "ajaira feature",
          "faltu feature",
          "hudai feature",
        ],
      },
      {
        id: 2,
        name: "medium",
        price: 19.9,
          features: [
            "Everything on medium",
          "awesome feature",
          "Extra feature",
          "unnessesary feature",
          "ajaira feature",
          "faltu feature",
          "hudai feature",
        ],
      },
      {
        id: 3,
        name: "Premium",
        price: 99.99,
          features: [
            "Everything on primium",
          "awesome feature",
          "Extra feature",
          "unnessesary feature",
          "ajaira feature",
          "faltu feature",
          "hudai feature",
        ],
      },
    ];
    return (
      <div>
        <h2 className="text-5xl bg-indigo-300 my-3 p-5 text-white">
          Best Deal of the Town
        </h2>
        <div className="grid grid-cols-3 gap-4">
                {
                    pricingOption.map((option) => (
            <Pricingoption key={option.id} option={option}></Pricingoption>
                    ))
                }
        </div>
      </div>
    );
};

export default Pricing;