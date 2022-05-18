import { useContext, useState } from "react";
import {  NavLink, Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import { IoMdSearch } from "react-icons/io";
import { IoIosMenu, IoIosClose } from "react-icons/io";

import Logo from "../layout/Logo";

function Nav() {
	const [auth, setAuth] = useContext(AuthContext); 

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/"); 
	}

	const [open, toggleOpen] = useState(false);

	function toggle() {
		toggleOpen(!open);
	}
	
	return (
		<>
		<nav>
			<div class="navdesktop container">
			<div>
			<NavLink activeClassName="active" to="/hotels">Hotels</NavLink>
			<NavLink activeClassName="active" to="/bb">BB</NavLink>
			<NavLink activeClassName="active" to="/guesthouse">Guesthouse</NavLink>
			</div>

			<Logo/>

			<div>
			<NavLink activeClassName="active" to="/contact">Contact</NavLink>
			<NavLink activeClassName="active" to="/"><IoMdSearch/></NavLink>

						
			{auth ? (
				<>
					<NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
					<Link activeClassName="active" onClick={logout}>Log out</Link>
					
				</>
			) : (
				<NavLink activeClassName="active" class="navdesktop__link" to="/login">Login</NavLink>
			)}
			</div>
			</div>


			<div className="mobilemenu container">

			<Logo/>

			<button onClick={toggle}>{open ? <IoIosClose /> : <IoIosMenu /> }</button>
			</div>
			
 			<div className={`mobilemenu__menu ${open ? "" : "closed"}`}>
			<Link class="mobilemenu__link" to="/hotels">Hotels</Link>
			<Link class="mobilemenu__link" to="/guesthouse">Guesthouse</Link>
			<Link class="mobilemenu__link" to="/bb">B&B</Link>
			<Link class="mobilemenu__link" to="/contact">Contact</Link>
			{auth ? (
				<>
					<Link class="mobilemenu__link" to="/dashboard">Dashboard</Link> 
					<Link class="mobilemenu__link" onClick={logout}>Log out</Link>
					
				</>
			) : (
				<Link class="mobilemenu__link" to="/login">Login</Link>
			)}
			<Link class="mobilemenu__link" to="/"><IoMdSearch/></Link>

			</div>

			<div class="ribbon">
				Use code <span>holidaze</span> for 20% on all bookings
				</div>
		</nav>
		</>
	);
}

export default Nav;