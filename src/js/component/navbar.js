import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	
	return (

		<nav className="navbar navbar-expand-lg bg-light row">
			<div className="container-fluid col-auto me-auto">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
							style={{ width: "160px", height: "100px" }}
						/>
					</span>
				</Link>
			</div>
			
			<div className="container-fluid col-auto">
					
				<div className="dropdown">
					<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>

					<ul className="dropdown-menu">
						<li><a className="dropdown-item far fa-trash-alt" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
					
				</div>
			
			</div>
		
	
	
		</nav>

		
		
			

			
			
	);
};
