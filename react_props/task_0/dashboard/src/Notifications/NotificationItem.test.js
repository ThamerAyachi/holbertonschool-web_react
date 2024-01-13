// NotificationItem.test.js
import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
	it("renders without crashing", () => {
		shallow(<NotificationItem />);
	});

	it("renders correct HTML with type and value props", () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.find("li").prop("data-priority")).toBe("default");
		expect(wrapper.find("span").text()).toBe("test");
	});

	it("renders correct HTML with html prop", () => {
		const htmlValue = "<u>test</u>";
		const wrapper = shallow(<NotificationItem html={{ __html: htmlValue }} />);
		expect(wrapper.find("li").html()).toContain(htmlValue);
	});
});
