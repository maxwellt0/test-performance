import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA270Component } from './comp-a270.component';

describe('CompA270Component', () => {
  let component: CompA270Component;
  let fixture: ComponentFixture<CompA270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
