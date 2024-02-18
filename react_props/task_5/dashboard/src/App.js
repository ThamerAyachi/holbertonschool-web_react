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
	const listCourses = [
		{ id: 1, name: "ES6", credit: 60 },
		{ id: 2, name: "Webpack", credit: 20 },
		{ id: 3, name: "React", credit: 40 },
	];

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
					{isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
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
