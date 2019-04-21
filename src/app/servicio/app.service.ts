// Importamos Dependecias
import { Injectable } from '@angular/core';

import { App } from '../servicio/app'; 
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AppService {

 	// Usamos el Servicio 'AngularFireList' de Angular Fire para listar los datos
 	appsRef: AngularFireList<any>;
	  
	// Iniciamos el servicio 'AngularFireDatabase' de Angular Fire
	constructor(private db: AngularFireDatabase) { }

  	// En nuestra función listarDatos() especificamos la colección de datos de Firebase Database Realtime que
  	// queremos usar, la colección que usaremos se llama 'postres'
  	listarDatos() {
    	this.appsRef = this.db.list('postres');
    return this.appsRef;
  } 

}
