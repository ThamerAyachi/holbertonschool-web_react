import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component", () => {
	it("renders without crashing", () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it("renders NotificationItem elements", () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find(NotificationItem)).toHaveLength(3);
	});

	it('renders the text "Here is the list of notifications"', () => {
		const wrapper = shallow(<Notifications />);
		const notificationText = wrapper.find("p").text();
		expect(notificationText).toEqual("Here is the list of notifications");
	});
});
