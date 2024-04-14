import React from 'react'

import Input from '../../components/Input'

const Category = ({handleRadio}) => {
  return (
    <div className='flex flex-col p-2'>
      <h2 className=''>Category</h2>
      <div className="space-y-1 m-2">
      <label>
          <input onChange={handleRadio} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
         handleRadio={handleRadio}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleRadio={handleRadio}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleRadio={handleRadio}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleRadio={handleRadio}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  )
}

export default Category