// Importamos Dependencias 
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../servicio/app.service'; 
import { App } from './../servicio/app';  

@Component({
  selector: 'app-lista-app',
  templateUrl: './lista-app.component.html',
  styleUrls: ['./lista-app.component.css']
})

export class ListaAppComponent implements OnInit {
  
  // Colocamos en la variable Dato la interface App[] 
  Dato: App[]; 

  // Ocultamos datos que se mostrarán cuando presione el usuario un botón 'Listar Datos'
  ocultarDatos: boolean = false;  

  constructor(

    // Creamos el método 'leerApp' y pasamos el servicio 'AppService' 
    public leerApp: AppService
    ){ }


  // Dentro de ngOninit
  ngOnInit() {
    this.dataState();

    // Dentro de la variable s colocamos el método leerApp y hacemos llamado al 
    // método listarDatos()que se encuentra en el servicio 'AppService'

    let s = this.leerApp.listarDatos(); 

    // Llamamos los datos desde Firebase e iteramos los datos con data.ForEach y por
    // último pasamos los datos a JSON

    s.snapshotChanges().subscribe(data => { 
      this.Dato = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Dato.push(a as App);
      })
    })
  }

 
 // En el método dataState() listamos los datos y cada ves que haya cambios en la base de
 // datos de Firebase, pues que muestre esos cambios en la vista con la propiedad '.ValueChanges()' y 
 // pasamos a true la variable 'ocultarDatos' para que muestre los datos 

  dataState() {     
    this.leerApp.listarDatos().valueChanges().subscribe(data => {
        this.ocultarDatos = true;
    })
  }

}
