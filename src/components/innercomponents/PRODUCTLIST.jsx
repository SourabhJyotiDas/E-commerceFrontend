import React, { useContext } from 'react'
import { FilterContext } from '../../context/filter_context'
import GRIDVIEW from './GRIDVIEW'
import LISTVIEW from './LISTVIEW';
import Loading from './Loading';

export default function PRODUCTLIST() {
    const { filter_products, grid_view, isLoading } = useContext(FilterContext)

    return (
        <>
            {isLoading ? <div><Loading /></div> :
                <div>
                    {grid_view === false ? <GRIDVIEW filter_products={filter_products} /> : null}
                    {grid_view === true ? <LISTVIEW filter_products={filter_products} /> : null}
                </div>
            }
        </>
    )
}
