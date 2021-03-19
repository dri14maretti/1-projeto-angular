import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

import { Student } from './student.model';
@Component({
	selector: 'jad-student',
	templateUrl: './student.component.html',
	styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
	@Input() student: Student = { name: '', isJedi: false };

	@Output() eventoDeletar = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	clicked() {
		console.log(`Student: ${this.student.name}`);
	}

	deleteFunc() {
		console.log(this.student);
		this.eventoDeletar.emit(this.student);
	}
}
