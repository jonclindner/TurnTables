import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'
const Navbar = ({ user, handleLogOut }) => {
  let userOptions
  

//    IMPLEMENT BOTH OF THESE IN A TERNARY WHEN WE FINISH USER AUTH 

  if (user) {
    userOptions = (<header>

      <Link to='/' className='siteLogo '><img className='homeLogo'src='https://cdn-icons-png.flaticon.com/512/181/181156.png'/><p className='siteTitle'>TurnTables</p></Link>
    <Link className='noDec'to='/feed'>Top Albums</Link>
    <Searchbar/>
    <Link to='/user-details' className='noDec'>
        <p className='noDec'>{user.name}</p>
    </Link>
        <Link className='noDec'onClick={handleLogOut} to="/">
          Sign Out
        </Link>
    </header>
    )
  }
  const publicOptions = (<header>

    <Link to='/' className='siteLogo orange'><img className='homeLogo'src='https://cdn-icons-png.flaticon.com/512/181/181156.png'/><p className='siteTitle'>TurnTables</p></Link>
    <Link to='/feed' className='noDec'>Top Albums</Link>
    <Searchbar/>
    <Link className='navLink noDec' to='/login'>Login</Link>
    <Link className='navLink noDec' to='/register'>Register</Link>
  </header>
  )




  return <div>
    {user ? userOptions :  publicOptions}

  </div>
}
export default Navbar
