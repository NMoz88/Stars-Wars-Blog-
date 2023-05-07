import React, {useContext, useEffect}from "react";
import "../../styles/home.css";
import { LongCard, LongCard2 } from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store,actions} = useContext(Context);
	
	return (
	<div className="text-center mt-5">
		<h1>Stars Wars Blog!</h1>
		<div className="row justify-content-center">
			<div className="col 5" style={{"height":"450px"}}>
			<LongCard title="Go to the characters" path="/characters"/>
			</div>
			<div className="col 5" tyle={{"height":"450px"}}>
			<LongCard2 title="Go to the planets" path="/planets"/>
			</div>
		</div>
	</div>
);
}