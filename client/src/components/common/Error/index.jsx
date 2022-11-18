import React from 'react'

function ErrorMessage ({ title = '' }) {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='font-light text-3xl mb-5'>{title}</h2>
      <img
        src='https://http.cat/404'
        alt='not found'
        className='max-w-[300px] md:max-w-[500px]'
      />
    </div>
  )
}

export default ErrorMessage
