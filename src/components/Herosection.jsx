import React from 'react'
import DISPLAY from './innercomponents/DISPLAY'
import FEATURE from './innercomponents/FEATURE'
import GALLERY from './innercomponents/GALLERY'
import STATISTIC from './innercomponents/STATISTIC'

export default function Herosection() {
    return (
        <>
            <DISPLAY/>
            <GALLERY/>
            <FEATURE />
            <STATISTIC />
        </>
    )
}
