import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Component", () => {
	it("renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true", () => {
		const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" />);
		const thElement = wrapper.find("th");

		expect(thElement.prop("colSpan")).toBe("2");
		expect(thElement.text()).toBe("Header");
	});

	it("renders two cells when textSecondCell is present and isHeader is true", () => {
		const wrapper = shallow(
			<CourseListRow
				isHeader
				textFirstCell="Header"
				textSecondCell="Subheader"
			/>
		);
		const thElements = wrapper.find("th");

		expect(thElements).toHaveLength(2);
		expect(thElements.at(0).text()).toBe("Header");
		expect(thElements.at(1).text()).toBe("Subheader");
	});

	it("renders correctly two td elements within a tr element when isHeader is false", () => {
		const wrapper = shallow(
			<CourseListRow textFirstCell="Data 1" textSecondCell="Data 2" />
		);
		const trElement = wrapper.find("tr");
		const tdElements = wrapper.find("td");

		expect(trElement).toHaveLength(1);
		expect(tdElements).toHaveLength(2);
		expect(tdElements.at(0).text()).toBe("Data 1");
		expect(tdElements.at(1).text()).toBe("Data 2");
	});
});
