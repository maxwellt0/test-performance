import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA249Component } from './comp-a249.component';

describe('CompA249Component', () => {
  let component: CompA249Component;
  let fixture: ComponentFixture<CompA249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
