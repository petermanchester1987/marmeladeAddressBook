import React from 'react'

const AddAddress = () => {
    return (
        <div>
            <label htmlFor="address">Choose The Address</label>
              <input  type="data-list" name="address" list="address-array"></input>
              <datalist id="address-array">
                
                </datalist>
        </div>
    )
}

export default AddAddress