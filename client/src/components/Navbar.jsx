import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'
const Navbar = ({ user, handleLogOut }) => {
  let userOptions
  

//    IMPLEMENT BOTH OF THESE IN A TERNARY WHEN WE FINISH USER AUTH 

  if (user) {
    userOptions = (<header>

      <Link to='/' className='siteLogo'><img className='homeLogo'src='https://cdn-icons-png.flaticon.com/512/181/181156.png'/><p className='siteTitle'>TurnTables</p></Link>
    {/* <Link className='noDec grow'to='/feed'>Top Albums</Link> */}
    <div className='dd'>
      <p className='noDec ddbtn'>Top Albums</p>
      <div className='ddContent'>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'pop'}}>Pop</Link>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'hip-hop'}}>Hip-Hop</Link>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'nu metal'}}>Nu Metal</Link>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'rock'}}>Rock</Link>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'country'}}>Country</Link>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'polka'}}>Traditional Polka</Link>
      </div>
    </div>
    <Searchbar/>
    <Link to='/user-details' className='noDec '>
        <p className='noDec lines'>{user.name}</p>
    </Link>
        <Link className='noDec lines'onClick={handleLogOut} to="/">
          Sign Out
        </Link>
    </header>
    )
  }
  const publicOptions = (<header>

    <Link to='/' className='siteLogo orange'><img className='homeLogo'src='https://cdn-icons-png.flaticon.com/512/181/181156.png'/><p className='siteTitle'>TurnTables</p></Link>
    <div className='dd'>
      <p className='noDec ddbtn'>Top Albums</p>
      <div className='ddContent'>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'pop'}}>Pop</Link>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'hip-hop'}}>Hip-Hop</Link>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'nu metal'}}>Nu Metal</Link>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'rock'}}>Rock</Link>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'country'}}>Country</Link>
      <Link to='/feed'className='noDec genreLink underline' state={{genre: 'polka'}}>Traditional Polka</Link>
      </div>
    </div>
    <Searchbar/>
    <Link className='navLink noDec lines' to='/login'>Login</Link>
    <Link className='navLink noDec lines' to='/register'>Register</Link>
  </header>
  )




  return <div>
    {user ? userOptions :  publicOptions}

  </div>
}
export default Navbar
