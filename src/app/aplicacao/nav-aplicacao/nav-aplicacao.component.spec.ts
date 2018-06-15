import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAplicacaoComponent } from './nav-aplicacao.component';

describe('NavAplicacaoComponent', () => {
  let component: NavAplicacaoComponent;
  let fixture: ComponentFixture<NavAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
