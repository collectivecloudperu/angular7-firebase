// Importamos los módulos 'BrowserModule' y 'NgModule' 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importamos el Componente 'ListaAppComponent'
import { ListaAppComponent } from './lista-app/lista-app.component';

// Importamos los Módulos de Angular Fire que usaremos
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// Importamos nuestro módulo AppRoutingModule en donde se encuentra definida la ruta 'listar-datos'
import { AppRoutingModule } from './/app-routing.module';

// Importamos el componente 'AppComponent' 
import { AppComponent } from './app.component';


// Definimos las dependencias que importaremos y exportamos nuestro módulo 'AppModule' 
@NgModule({
  declarations: [
    AppComponent,
    ListaAppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireDatabaseModule, 
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
