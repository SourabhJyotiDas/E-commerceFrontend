import React, { useContext } from 'react'
import { FilterContext } from '../../context/filter_context';
import PRICEFORMAT from "../../helper/PRICEFORMAT"

export default function FILTER() {
  
  const { filters: { text,  price, maxPrice, minPrice }, updateFilterValue, all_products,  clearFilter } = useContext(FilterContext)
  

  const getUniqueData = (data, property) => {
    let newValue = data.map((ele) => {
      return ele[property]
    })

    if (property === "colors") {
      return (newValue = ["All", ...new Set([].concat(...newValue))])
    }

    return newValue = ["All", ...new Set(newValue)]
    // console.log(newValue);
  }

  const categoryData = getUniqueData(all_products, "category")
  const companyData = getUniqueData(all_products, "company")
  const colorsData = getUniqueData(all_products, "colors")

  // console.log(colorsData);

  return (
    <div className='w-[100%] md:w-[30vw] h-[100vh]  px-5 sticky top-0 flex flex-col items-center justify-around'>
      <div></div>
      <div>

        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input className='border-2 border-blue-500 rounded-md p-2 outline-none ' type="text" name='text' value={text} onChange={updateFilterValue} placeholder="Search" />
        </form>

      </div>

      <div className='h-[1px] bg-gray-400 w-[100%]'></div>

      {/* selected category */}

      <div>
        <div className='flex flex-col space-y-4'>
          <h3 className='text-xl text-blue-500'>Categories</h3>
          {
            categoryData.map((element, index) => {
              return <button key={index} type="button" name='category' onClick={updateFilterValue} value={element}>
                {element}
              </button>
            })
          }
        </div>
      </div>

      <div className='h-[1px] bg-gray-400 w-[100%]'></div>


      <h3 className='text-xl text-blue-500'>Company</h3>
      <form action="#">
        <label htmlFor="sort"></label>
        <select className='p-1 cursor-pointer ' name="company" id="company" onClick={updateFilterValue}>

          {
            companyData.map((element, index) => {
              return (
                <option value={element} name="company" key={index}>{element}</option>
              )
            })
          }

        </select>
      </form>

      <div className='h-[1px] bg-gray-400 w-[100%]'></div>


      <div className='text-center'>
        <h3 className='text-xl text-blue-500'>Colors</h3>
        <div>
         
          {
            colorsData.map((element, index) => {
              if (element === 'All') {
                return <button key={index} onClick={updateFilterValue} value={element} name="color">
                  All
                </button>
              }

              return <button key={index} className="border-2 border-gray-800 ml-1 rounded-full w-6 h-6 focus:outline-none" style={{ backgroundColor: element }} onClick={updateFilterValue} value={element} name="color">
              </button>
            })
          }

        </div>
      </div>

      <div className='h-[1px] bg-gray-400 w-[100%]'></div>


      {/* price */}
      <div className='text-center'>
        <h3 className='text-xl text-blue-500'>Price</h3>

        <p> price <PRICEFORMAT price={price} /> </p>
        <input className='w-[100%] cursor-pointer' type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
      </div>

      {/* Clear Filter */}
      <div>
        <button onClick={clearFilter} className='bg-blue-500 p-2 rounded-lg text-white'>Clear filter</button>
      </div>

    </div>
  )
}
