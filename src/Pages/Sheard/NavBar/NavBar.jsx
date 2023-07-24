import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";


const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);
  console.log(user)

  const handelLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error)
      })
  }

  const navOption = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/allcollege'>Colleges</Link></li>
    <li><Link to='/admission'>Admission</Link></li>
    <li><Link to='/mycollege'>My College</Link></li>
    {user ? <>
      <li><Link></Link></li>
      <li><Link><button onClick={handelLogOut}>logOut</button></Link></li>

    </> : <li><Link to='/login'>LogIn</Link></li>}
  </>

  return (
    <>
      <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Favorite College</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered text-black w-24 md:w-auto" />
        </div>
        <div className="navbar-end">
         
         <Link to='/profile'> {user && <span className='text-White'>{user.displayName}</span>}</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;