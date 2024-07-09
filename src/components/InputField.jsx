import React from 'react'

const InputField = ({searchQuery, handleSearchChange, showInput}) => {
  return (
    <>
    {showInput && <div className='absolute right-[90%] h-full'>
        <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-[150px] md:w-[200px] text-[14px] md:text-[16px] h-full bg-white outline-none rounded-md pl-3"
      />
    </div>}
    </>
  )
}

export default InputField