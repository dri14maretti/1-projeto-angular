import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../student/student.model';

@Component({
	selector: 'jad-add-jedi',
	templateUrl: './add-jedi.component.html',
	styleUrls: ['./add-jedi.component.css'],
})
export class AddJediComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	// Adiciona um emissor de eventos para toda vez que o botão "send" for cliclado
	@Output() eventoAdicionar = new EventEmitter();

	// Função que será utilizada no HTML deste componente a fim de receber os dados que vem dele e emitir o evento em sí
	enviarEventoAdd(name: string, isJedi: boolean) {
		this.eventoAdicionar.emit({ name, isJedi });
	}

	clear(name: any, check: any) {
		name.value = '';
		check.checked = false;
	}
}
