import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt} from "react-icons/fa"

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
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
			
			<div className="btn-group dropstart col-auto me-auto">
				<button
					type="button"
					className="btn btn-primary dropdown-toggle"
					data-bs-toggle="dropdown"
					aria-expanded="false"
					>
						Favorites
				</button>
				<ul className="dropdown-menu">
				<li className="dropdown-item">personaje 1 <FaTrashAlt/></li>
				<li className="dropdown-item">personaje 2 <FaTrashAlt/></li>
					{console.log(store.favorites)}
					{store.favorites.map((value, index) => {
						return (
							<li key={index} className="dropdown-item">
								{value.name}
								<FaTrashAlt
								onClick={() => {
									actions.deleteFav(value.id);
								}}
								/>
							</li>
						);
					})}
				</ul>
			</div>
			




						{/* <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item far fa-trash-alt" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
						
						<ul className="dropdown-menu">
						{console.log(store.favorites)}
						{store.favorites.map((value, index) => {
							return (
							<li key={index} className="dropdown-item">
								{value.name}
								<FaTrashAlt
								onClick={() => {
									actions.deleteFav(value.id);
								}}
								/>
							</li>
							);
						})}




						
						</ul> */}
					


					{/* <div className="btn-group dropstart">
						<button
						type="button"
						className="btn btn-primary dropdown-toggle"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						>
						Favorites
						</button>
						<ul className="dropdown-menu">
						{console.log(store.favorites)}
						{store.favorites.map((value, index) => {
							return (
							<li key={index} className="dropdown-item">
								{value.name}
								<FaTrashAlt
								onClick={() => {
									actions.deleteFav(value.id);
								}}
								/>
							</li>
							);
						})}
						</ul>
					</div> */}

					{/* <ul className="dropdown-menu">
						




						{store.favorites.map((value, index) => {
                		return (
							<li key={index} className="dopdown-item"> {value}  
								<button onClick={() => { actions.deleteFav(value.name)}}>
									<i class="fas fa-trash-alt"></i>
								</button>
							</li>
						)})}
					</ul> */}
					
			
	
		</nav>

	);
};
