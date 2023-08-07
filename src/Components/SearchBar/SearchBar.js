import React from 'react'
import './searchBar.css'

function SearchBar({value,handleSearchKey,clearSearch,submitForm}) {
  return (
    <div className='searchBar-wrap'>
        <form onSubmit={submitForm}>
      <input type="text" onChange={handleSearchKey} value={value} placeholder='Search by catagery'/>
      {value && <span onClick={clearSearch} >X</span>}
      <button>Go</button>
      </form>
    </div>
  )
}

export default SearchBar
