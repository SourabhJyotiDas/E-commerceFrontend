import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"

export default function STAR({ stars, reviews }) {
    // console.log(stars);

    const ratingStar = Array.from({ length: 5 }, (ele, index) => {

        let number = index + 0.5;
        // console.log(stars);

        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar className='text-white' />
                ) : stars >= number ? (
                    <FaStarHalfAlt className='text-white' />
                ) : (
                    <AiOutlineStar className='text-white' />
                )}
            </span>
        )
    })

    return (
        <div className='flex'>
            {ratingStar}
        </div>
    )
}
