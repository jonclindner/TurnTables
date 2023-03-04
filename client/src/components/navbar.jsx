import {Link} from 'react-router-dom'
const Navbar = ({ user, handleLogOut }) => {
  let userOptions

//    IMPLEMENT BOTH OF THESE IN A TERNARY WHEN WE FINISH USER AUTH 

  // if (user) {
  //   userOptions = (
  //     <nav>
  //       <h3>Welcome {user.email}!</h3>
  //       <Link to="/feed">Feed</Link>
  //       <Link onClick={handleLogOut} to="/">
  //         Sign Out
  //       </Link>
  //     </nav>
  //   )
  // }
  // const publicOptions = (
  //   <nav>
  //     <Link to="/">Home</Link>
  //     <Link to="/register">Register</Link>
  //     <Link to="/signin">Sign In</Link>
  //   </nav>
  // )




  return (<header>
      {/* {user ? userOptions : publicOptions} */}

    <Link to='/'>Home</Link>
    <Link to='/login'>Login</Link>
    <Link to='/register'>Register</Link>
    <Link to='/feed'>Feed</Link>
  </header>)
}
export default Navbar