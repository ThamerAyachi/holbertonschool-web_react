import React from "react";
import "./Header.css";
import Logo from "./logo.jpg";

const Header = () => {
	return (
		<div className="App-header">
			<img src={Logo} alt="logo" width={"300px"} />
			<h1>School dashboard</h1>
		</div>
	);
};

export default Header;
