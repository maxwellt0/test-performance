import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA160Component } from './comp-a160.component';

describe('CompA160Component', () => {
  let component: CompA160Component;
  let fixture: ComponentFixture<CompA160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
