import React from 'react'

const BlueButtonText = ({
    text
}) => {
    return (
        <button className='text-primary-500 py-2.5 px-6 rounded-lg bg-white font-medium text-sm '>
            {text}
        </button>
    )
}

export default BlueButtonText