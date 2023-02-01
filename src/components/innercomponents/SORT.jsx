import React, { useContext } from 'react'
import { BsGridFill, BsViewList } from "react-icons/bs"
import { TfiFilter } from "react-icons/tfi"
import { FilterContext } from '../../context/filter_context'
import FILTER from './FILTER'

export default function SORT() {
  const { setGridView, setListView, filter_products, sorting } = useContext(FilterContext)

  const toggleFilter=()=>{
    document.getElementById("toggleFilter").classList.toggle("hidden")
  }

  return (
    <>
      <div className='flex justify-evenly w-[full]'>
        <div className='text-2xl flex'>
          <button onClick={setListView} className=' hidden md:block'><BsGridFill /></button>
          <button onClick={setGridView} className='mx-3 hidden md:block'><BsViewList /></button>
        </div>

        <div>{`${filter_products.length}`} product found</div>

        <div className='hidden md:block'>
          <form action="#">
            <label htmlFor="sort"></label>
            <select className='p-1 cursor-pointer ' name="sort" id="sort" onClick={sorting}>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Name (A to Z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Name (Z to A)</option>
            </select>
          </form>
        </div>
      </div>

      <div className=''>
        <div className='justify-around flex '>
          <div className='md:hidden'>
            <form action="#">
              <label htmlFor="sort"></label>
              <select className='p-1 cursor-pointer ' name="sort" id="sort" onClick={sorting}>
                <option value="lowest">Price(lowest)</option>
                <option value="#" disabled></option>
                <option value="highest">Price(highest)</option>
                <option value="#" disabled></option>
                <option value="a-z">Name (A to Z)</option>
                <option value="#" disabled></option>
                <option value="z-a">Name (Z to A)</option>
              </select>
            </form>
          </div>
          <div className='md:hidden'> <button  onClick={toggleFilter} className='bg-white px-5 py-1 text-black flex items-center '><TfiFilter /> Filter </button></div>
        </div>
        <div className='hidden' id='toggleFilter' >
          <FILTER />
        </div>
      </div>
    </>
  )
}
