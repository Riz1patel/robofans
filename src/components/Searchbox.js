import React from 'react'

export const Searchbox = (props) => {
    return (
        <div>
            <input type="text" className='w-25 b--solid' onChange={props.textChangeProps} placeholder='search here'/>
            <br /><br />
        </div>
    )
}