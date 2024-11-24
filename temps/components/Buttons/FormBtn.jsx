import React from 'react'

const FormBtn = ({ btnText, btnOnChange, btnType }) => {
  return (
    <button className='mt-4 bg-[#7466f1] text-white py-2 px-6 rounded-md shadow-md' onChange={btnOnChange} type={btnType}>
        {btnText}
    </button>
  )
}

export default FormBtn