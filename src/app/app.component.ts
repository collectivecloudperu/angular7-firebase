// Importamos Dependencia Angular Core
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  	// Definimos un título 
  	title = 'Como Integrar Firebase y Angular 7';
 
  	// Creamos la logica para que el botón 'Listar Datos' desaparezca cuando se le haga clic
  	isValid: boolean = true;
	check(valid: boolean){
		this.isValid = valid;
	}

}
