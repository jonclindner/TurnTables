import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'


const Searchbar = () => {
  let navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('')
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (<div className='searchBar'>
    <Link to={`/search/${searchValue}`} state={{searchValue: `${searchValue}`}}>
    <img className='magnifyingGlass grow' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png' />
    </Link>
    
  <input className='searchInput'placeholder='Search Albums' onChange={handleChange} onKeyUp={(e)=>{
    if (e.keyCode === 13){
      navigate(`/search/${searchValue}`, {state: {searchValue: `${searchValue}`}})
    }
      
    }}
   />
  </div>)
}
export default Searchbar