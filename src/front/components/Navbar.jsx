import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons'; // Import the bomb icon


export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				{/* Brand: "Movie Bombs" with a bomb icon */}
				<Link className="navbar-brand" to="/">
					<FontAwesomeIcon icon={faBomb} className="me-2" /> {/* FontAwesomeIcon with margin-right */}
					Movie Bombs
				</Link>

				{/* Hamburger toggle button for smaller screens */}
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* Navbar content */}
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						{/* Dropdown menu for Login and Register */}
						<li className="nav-item dropdown">
							<Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Account
							</Link>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><Link className="dropdown-item" to="/login">Login</Link></li>
								<li><Link className="dropdown-item" to="/register">Register</Link></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};