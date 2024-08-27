
const SearchBar = ({filterValue, handleFilter}) => {
  return (
    <div>
      <h2>Search profile: </h2>
      <input type="text" value={filterValue} onChange={handleFilter} placeholder="Enter your profile name"/>
    </div>
  )
}

export default SearchBar
