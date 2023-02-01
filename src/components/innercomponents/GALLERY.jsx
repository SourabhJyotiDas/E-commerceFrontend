import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from "../../context/productcontext"
import PRICEFORMAT from '../../helper/PRICEFORMAT';
import Loading from './Loading';


export default function GALLERY() {
    
    const { isLoading, featuresProducts } = useContext(AppContext);

    return (
        <>
            {isLoading ? <div><Loading/></div> :
                <div>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className='mb-5'>
                                <p className='text-xs'>CHECK NOW!</p>
                                <h1 className='text-2xl font-semibold'>Our Feature Services</h1>
                            </div>
                            <div className="flex flex-wrap -m-4">
                                {featuresProducts.map((element, index) => {
                                    return <div className="p-4 md:w-1/3" key={index}>
                                        <Link to={`/singleproduct/${element.id}`}>
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={element.image} alt="blog" />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                                    <p className="leading-relaxed mb-3">{element.description.slice(0,120)}... <span className='text-blue-500'>more</span> </p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">{element.name}
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </div>
                                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                            <PRICEFORMAT price={element.price}/>
                                                        </span>

                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                })}
                            </div>
                        </div>
                    </section>

                </div>
            }
        </>
    )
}
