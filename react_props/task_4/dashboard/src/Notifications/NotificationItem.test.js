import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
	it("renders correct HTML with type and value props", () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		const expectedHtml = '<li data-priority="default"><span>test</span></li>';
		expect(wrapper.html()).toBe(expectedHtml);
	});

	it("renders correct HTML with html prop", () => {
		const htmlValue = "<u>test</u>";
		const wrapper = shallow(<NotificationItem html={{ __html: htmlValue }} />);
		expect(wrapper.find("li").html()).toEqual(
			`<li data-priority="default">${htmlValue}</li>`
		);
	});
});
