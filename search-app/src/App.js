import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import Results from './components/searchBar/Results';
import {useEffect, useState} from "react"
import Filter from './components/Filter';
import useSearchLogic from './hooks/useSearchLogic'
import useFilter from './hooks/useFilter'

function App() {

  const [activities, setActivities] = useState([])

  const [filters, setFilters] = useState([
    { name: 'isSpecialOffer', type: 'boolean', value: false },
    { name: 'price', type: 'range', value: 50 },
  ])

  const filteredActivities = useFilter({
    activities,
    filters
  })

  const { handleSearchText, handleSubmit, searchText } = useSearchLogic({ onDataFetched: (data) => setActivities(data)})

  return (
    <div>
      <Filter filters={filters} onChange={(updatedFilters) => setFilters(updatedFilters)}/>
      <SearchBar onChange={handleSearchText} value={searchText} onSubmit={handleSubmit}></SearchBar>
      <Results activities={activities}></Results>
      <Results activities={filteredActivities}></Results>
      {
       JSON.stringify(filters)
      }
    </div>
  );
}

export default App;
