import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA187Component } from './comp-a187.component';

describe('CompA187Component', () => {
  let component: CompA187Component;
  let fixture: ComponentFixture<CompA187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
