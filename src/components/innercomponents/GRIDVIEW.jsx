import React from 'react'
import { Link } from 'react-router-dom';
import PRICEFORMAT from "../../helper/PRICEFORMAT"

export default function GRIDVIEW({ filter_products }) {

    // console.log(filter_products);

    return (
        <div className="flex flex-wrap justify-center">
            {filter_products.map((element, index) => {
                return <div className="p-4 " key={index}>
                    <Link to={`/singleproduct/${element.id}`}>
                        <div className="md:h-[100%] md:w-[25vw] lg:w-[20vw] border-2 border-gray-200 border-opacity-60 rounded-lg p-5">
                                <div className="flex flex-col">
                                    <img className="h-auto" src={element.image} alt="content"/>
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{element.category}</h3>
                                        <h2 className="text-lg text-white font-medium title-font ">{element.name}</h2>
                                        <p className="leading-relaxed text-base">{element.description.slice(0,60)}...</p>
                                        <h2 className="text-lg text-white font-medium title-font "><PRICEFORMAT price={element.price}/></h2>
                                </div>
                            </div>
                    </Link>
                </div>
            })}
        </div>
    )
}
