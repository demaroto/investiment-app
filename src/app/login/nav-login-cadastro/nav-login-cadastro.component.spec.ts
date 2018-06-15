import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLoginCadastroComponent } from './nav-login-cadastro.component';

describe('NavLoginCadastroComponent', () => {
  let component: NavLoginCadastroComponent;
  let fixture: ComponentFixture<NavLoginCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLoginCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLoginCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
