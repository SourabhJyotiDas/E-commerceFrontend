import React from 'react'
import FILTER from './innercomponents/FILTER';
import PRODUCTLIST from './innercomponents/PRODUCTLIST';
import SORT from './innercomponents/SORT';

function Products() {

  return (
    <div className='flex'>
      <div className='w-[30vw] hidden md:block'>
        <FILTER />
      </div>
      <section className="text-gray-400 bg-gray-900 body-font flex flex-col w-[100%]">
        <SORT />
        <PRODUCTLIST />
      </section>
    </div>
  )
}

export default Products