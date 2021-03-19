import { Component, Input } from '@angular/core';

import { Student } from './student/student.model';

@Component({
	selector: 'jad-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	students: Student[] = [
		{
			name: 'Luke',
			isJedi: true,
			temple: 'Coruscant',
		},
		{ name: 'Leia', isJedi: false },
		{ name: 'Han Solo', isJedi: false },
	];

	addJedi(newStudent: any) {
		let newJedi: Student = {
			name: newStudent.name,
			isJedi: newStudent.isJedi,
		};

		if (newStudent.isJedi) newJedi.temple = 'Coruscant';

		this.students.push(newJedi);
	}

	deleteJedi(student: any) {
		this.students.splice(this.students.indexOf(student), 1);
	}
}
