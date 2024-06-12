import React from 'react'

const HeaderBlock = ({
    title,
    children
}) => {
    return (
        <div className='flex items-center justify-between gap-5 mb-8'>
            <h2 className='text-grey-900 font-semibold leading-8'>{title}</h2>
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default HeaderBlock