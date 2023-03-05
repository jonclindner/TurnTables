import {useState} from 'react'
import {Link} from 'react-router-dom'


const Searchbar = () => {
  const [searchValue, setSearchValue] = useState('')
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (<div>
    <Link></Link>
    <img className='magnifyingGlass' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png'/>
  <input placeholder='Search Albums' onChange={handleChange}/>
  </div>)
}
export default Searchbar