import React from 'react'

function SearchBar({ onChange, value, onSubmit }) {
    return ( 
        <div>
            <form onSubmit={onSubmit}>
                <input value={value} type="search" onChange={onChange}/>
                <button type="submit" disabled={!value}>Submit</button>
            </form>
        </div>
    )
}

export default SearchBar
