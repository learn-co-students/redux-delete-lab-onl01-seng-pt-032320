import React, { Component } from 'react'
import Band from './Band'

const Bands = props => {
    const allBands = props.bands.map(band => <Band key={band.id} {...band} delete={props.delete}/>)

    return (
        <div>
            {allBands}
        </div>
    )
}

export default Bands
