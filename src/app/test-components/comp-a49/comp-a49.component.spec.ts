import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA49Component } from './comp-a49.component';

describe('CompA49Component', () => {
  let component: CompA49Component;
  let fixture: ComponentFixture<CompA49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA49Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
