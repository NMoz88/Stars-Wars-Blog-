import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Planets } from "./views/planets";
import { Characters } from "./views/characters";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { DetailsPlanet} from "./views/detailsplanet";
import { DetailsCharacter } from "./views/detailscharacters";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters/>} />
						<Route path="/planets" element={<Planets/>} />
						<Route path="/details/characters/:id" element={<DetailsCharacter/>} />
						<Route path="/details/planets/:id" element={<DetailsPlanet/>} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
