import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import {SingleCharacter} from "./views/SingleCharacter.jsx";
import {SinglePlanet} from "./views/SinglePlanet.jsx";
import {SingleStarship} from "./views/SingleStarship.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
					<Route exact path="/character/:index">
							<SingleCharacter/>
						</Route>
					<Route exact path="/planet/:index">
							<SinglePlanet/>
						</Route>
						<Route exact path="/starship/:index">
							<SingleStarship/>
						</Route>

						<Route exact path="/">
							<Home />
						</Route>
						
							<h1>Not found!</h1>
						
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
