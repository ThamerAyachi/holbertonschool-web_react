import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Component", () => {
	it("renders CourseList component without crashing", () => {
		shallow(<CourseList />);
	});

	it("renders the 5 different rows", () => {
		const wrapper = shallow(<CourseList />);
		const courseListRows = wrapper.find(CourseListRow);

		expect(courseListRows).toHaveLength(5);

		// Check content of the first row (header row)
		expect(courseListRows.at(0).props()).toEqual({
			isHeader: true,
			textFirstCell: "Available courses",
		});

		// Check content of the second row (header row)
		expect(courseListRows.at(1).props()).toEqual({
			isHeader: true,
			textFirstCell: "Course name",
			textSecondCell: "Credit",
		});

		// Check content of the third row (data row)
		expect(courseListRows.at(2).props()).toEqual({
			isHeader: false,
			textFirstCell: "ES6",
			textSecondCell: "60",
		});

		// Check content of the fourth row (data row)
		expect(courseListRows.at(3).props()).toEqual({
			isHeader: false,
			textFirstCell: "Webpack",
			textSecondCell: "20",
		});

		// Check content of the fifth row (data row)
		expect(courseListRows.at(4).props()).toEqual({
			isHeader: false,
			textFirstCell: "React",
			textSecondCell: "40",
		});
	});
});
