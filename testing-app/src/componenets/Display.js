import React from 'react';

const Display = props => {
    return(
        <>
        <div className='inningStats'>
        <section>
            <h2 className='ball__title'>Ball:</h2>
            <p className='ball__value'>{props.value.ball}</p>

            <h2 className='strike__title'>Strike:</h2>
            <p className='strike__value'>{props.value.strike}</p>

            <h2 className='out__title'>Out:</h2>
            <p className='out__value'>{props.value.outs}</p>

            <h2 className='inning__title'>Inning:</h2>
            <p className='inning__value'>{props.value.innings}</p>
        </section>
        </div>
        </>
    )
}

export default Display;