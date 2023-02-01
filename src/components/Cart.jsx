import React, { useContext } from 'react'
import { RiDeleteBin7Line } from "react-icons/ri"
import { Link } from 'react-router-dom';
import { cartContext } from '../context/cartContext'
import PRICEFORMAT from '../helper/PRICEFORMAT';

export default function Cart() {
  const { cart, removeItem, clearCart, handleDecrement, handleIncrement, total_price, shipping_fee } = useContext(cartContext)
  // console.log(cart);

  return (
    <>
      {
        cart.length === 0 ? <div className='h-[50vh] w-[100vw] flex justify-center items-center text-2xl'>No items in Cart
          <Link to="/products"><button className='bg-purple-500 text-white p-3 mx-5'> START SHOPPING</button></Link>
        </div> :
          <div>
            <div className='overflow-x-auto  '>

              <div className='w-[200%] md:w-[100%]'>
                <div className='grid grid-cols-6  py-3 '>
                  <div></div>
                  <h3>ITEM</h3>
                  <h3>PRICE</h3>
                  <h3>QUANTITY</h3>
                  <h3>SUBTOTAL</h3>
                  <h3>REMOVE</h3>
                </div>
                <div className='h-[1px] w-[80%] m-auto bg-gray-400'></div>

                <div className=''>
                  {
                    cart.map((element, index) => {
                      return <div className='grid grid-cols-6 items-center  space-y-5' key={index}>
                        <div></div>
                        <div className='flex items-center'>
                          <img className='h-[30px] rounded-md mr-2' src={element.image} alt="" />
                          <div className='flex flex-col'>
                            <h3>{element.name}</h3>
                            <div className='w-4 h-4 rounded-full' style={{ backgroundColor: element.color }}></div>
                          </div>
                        </div>
                        
                        <h3><PRICEFORMAT price={element.price} /></h3>
                        <div className='flex items-center '>
                          <button onClick={() => { handleDecrement(element.id) }} className='px-3 py2 bg-blue-500 text-white mx-2 rounded-md'>-</button>
                          <h3>{element.amount}</h3>
                          <button onClick={() => { handleIncrement(element.id) }} className='px-3 py2 bg-blue-500 text-white mx-2 rounded-md'>+</button>
                        </div>

                        <h3><PRICEFORMAT price={element.price * element.amount} /></h3>
                        <h3 className='cursor-pointer text-xl'><RiDeleteBin7Line onClick={() => removeItem(element.id)} /></h3>
                        <div></div>

                      </div>
                    })
                  }
                </div>
              </div>

            </div>
            <div className='h-[1px] w-[80%] m-auto bg-gray-400'></div>


            <div className='flex justify-around my-5'>
              <Link to="/products"><button className='bg-purple-500 text-white p-3'>CONTINUE SHOPPING</button></Link>
              <button onClick={clearCart} className='text-white bg-red-500 p-3'>CLEAR CART</button>
            </div>

            <div className='flex md:justify-end w-[100%]  md:w-[80%] m-auto mt-5 '>
              <div className='flex flex-col w-[100%] px-5 md:w-[40%] space-y-4' >
                <div className='flex justify-between'>
                  <p>Subtotal</p>
                  <h5> <PRICEFORMAT price={total_price} /> </h5>
                </div>
                <div className='flex justify-between'>
                  <p>Shipping Fee</p>
                  <h5> <PRICEFORMAT price={shipping_fee} /></h5>
                </div>

                <div className='h-[1px] w-[100%] m-auto bg-gray-400'></div>

                <div className='flex justify-between'>
                  <p>Order Total</p>
                  <h5> <PRICEFORMAT price={total_price + shipping_fee} /> </h5>
                </div>
              </div>
            </div>
          </div>

      }
    </>
  )
}
