import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom";
require('dotenv').config();


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);