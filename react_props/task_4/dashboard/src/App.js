// App.js
import React from "react";
import PropTypes from "prop-types";
import "./App.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import CourseList from "./CourseList/CourseList";

import Notifications from "./Notifications/Notifications";

function App({ isLoggedIn }) {
	return (
		<>
			<div id="root-notifications">
				<Notifications displayDrawer={isLoggedIn} />
			</div>
			<div className="App">
				<div>
					<Header />
				</div>

				<div className="App-body">
					{isLoggedIn ? <CourseList /> : <Login />}
				</div>
				<Footer />
			</div>
		</>
	);
}

App.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
};

export default App;
