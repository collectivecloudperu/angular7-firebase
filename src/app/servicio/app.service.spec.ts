// Instanciamos Dependencias
import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

// Declaramos a prueba el servicio 'AppService'
describe('AppService', () => {

  // Mediante la función 'beforeEach()' Angular hace una prueba antes de ejecutar el servicio 'AppService'
  // Angular utiliza el Framework Jasmine para hacer pruebas, https://jasmine.github.io/1.3/introduction.html 
  beforeEach(() => {

    // Con la interfaz TestBed configuramos e iniciamos un entorno de pruebas para el servicio 'AppService'
    TestBed.configureTestingModule({
      providers: [AppService]
    });
  });

  // En el Framework Jasmine para realizar pruebas usamos la función 'it' para definir el caso o tipo de prueba
  // 'should be created' que significa 'debe ser creado' en español.
  // Verificamos si los valores son verdaderos con la función '.toBeTruthy()' de Jasmine
  it('should be created', inject([CrudService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));
});
