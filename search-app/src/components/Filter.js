import React from "react"

const Checkbox = ({ onChange, value }) => {
  return <input type='checkbox' checked={value} onChange={onChange}></input>
}
const Range = ({ onChange, value }) => {
  return (
    <div>
      <input type='range' min={0} max={500} value={value} onChange={onChange}></input>
      {value}
    </div>
  )
}

const FilterRenderer = ({ filter, onChange }) => {
  const { name, type, value } = filter
  return (
    <form className='filter-renderer'>
      <label className='filter-renderer__label'>{name}</label>
      { type === 'boolean' && <Checkbox value={value} onChange={(e) => {
        onChange(e.target.checked)
      }}/> }
      { type === 'range' && <Range value={value} onChange={(e) => onChange(e.target.value)}/>} 
    </form>
  )
}

const Filter = ({ filters, onChange }) => {
  return (
    <div>
      <h2> Filters </h2>
      {filters.map((filter) => {
        return <FilterRenderer key={filter.name} filter={filter} onChange={(value) => {

          const updatedFilters = filters.map((kFilter) => {
            return kFilter.name === filter.name ? {
              ...kFilter,
              value
            } : kFilter
          })

          onChange(updatedFilters)
        }}/>
      })}
    </div>
  )
}

export default Filter