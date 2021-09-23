//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
import { SecondsCounter } from "./component/secondsCounter";

//render your react application
const start = Date.now();

setInterval(() => {
	const millis = Date.now() - start;

	const seconds = Math.floor(millis / 1000);
	ReactDOM.render(
		<SecondsCounter seconds={seconds} />,
		document.querySelector("#app")
	);
}, 1000);
