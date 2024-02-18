import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import Notifications from "./Notifications/Notifications";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";

describe("App component", () => {
	it("renders without crashing", () => {
		const wrapper = shallow(<App isLoggedIn={false} />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it("contains the Notifications component when isLoggedIn is true", () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		expect(wrapper.find(Notifications)).toHaveLength(1);
	});

	it("contains the Header component", () => {
		const wrapper = shallow(<App isLoggedIn={false} />);
		expect(wrapper.find(Header)).toHaveLength(1);
	});

	it("contains the Login component when isLoggedIn is false", () => {
		const wrapper = shallow(<App isLoggedIn={false} />);
		expect(wrapper.find(Login)).toHaveLength(1);
	});

	it("contains the CourseList component when isLoggedIn is true", () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		expect(wrapper.find("CourseList")).toHaveLength(1);
	});

	it("contains the Footer component", () => {
		const wrapper = shallow(<App isLoggedIn={false} />);
		expect(wrapper.find(Footer)).toHaveLength(1);
	});
});
