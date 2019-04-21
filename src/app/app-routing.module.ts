// Importamos Dependencias 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaAppComponent } from './lista-app/lista-app.component';

// Definimos la ruta 'listar-datos' y pasamos el componente 'ListaAppComponent'

const routes: Routes = [
  { path: 'listar-datos', component: ListaAppComponent }
];

// Importamos la ruta listar-datos en 'routes' y activamos 'HashLocationStrategy' con useHash: true 

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
