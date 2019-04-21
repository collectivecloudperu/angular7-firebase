import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAppComponent } from './lista-app.component';

describe('ListaAppComponent', () => {
  let component: ListaAppComponent;
  let fixture: ComponentFixture<ListaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
