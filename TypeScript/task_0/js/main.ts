interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Marco",
	lastName: "Polo",
	age: 31,
	location: "Italy",
};

const student2: Student = {
	firstName: "David",
	lastName: "Pikas",
	age: 25,
	location: "France",
};

const studentsList: Array<Student> = [student1, student2];
const labels: string[] = ["firstName", "location"];

const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

document.body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

for (let i: number = 0; i < labels.length; i++) {
	const th: HTMLTableCellElement = document.createElement("th");
	th.appendChild(document.createTextNode(`${labels[i]}`));
	thead.appendChild(th);
}

for (let i: number = 0; i < studentsList.length; i++) {
	const tr: HTMLTableRowElement = document.createElement("tr");
	tbody.appendChild(tr);
	const values: string[] = [
		studentsList[i].firstName,
		studentsList[i].location,
	];

	for (let j: number = 0; j < values.length; j++) {
		const td: HTMLTableCellElement = document.createElement("td");
		td.appendChild(document.createTextNode(`${values[j]}`));
		tr.appendChild(td);
	}
}
