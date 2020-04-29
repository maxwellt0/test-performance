import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA212Component } from './comp-a212.component';

describe('CompA212Component', () => {
  let component: CompA212Component;
  let fixture: ComponentFixture<CompA212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
