import React from 'react'

function Search(props) {

  const handleChange = e => {
    props.setQuery(e)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => handleChange(e.target.value)} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search;
