import React, {useContext, useEffect}from "react";
import "../../styles/home.css";
import { LongCard, LongCard2 } from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store,actions} = useContext(Context);
	
	return (
	<div className="text-center mt-5">
		<h1>Stars Wars Blog!</h1>
		<div className="row">
			<LongCard title="Go to the characters" path="/characters"/>
			<LongCard2 title="Go to the planets" path="/planets"/>
		</div>
	</div>
);
}