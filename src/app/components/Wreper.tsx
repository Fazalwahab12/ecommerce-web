import React, { FC } from 'react'

const Wreper: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='   max-w-screen-lg mx-auto'>
        {children}
        </div>
  )
}

export default Wreper