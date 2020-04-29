import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA55Component } from './comp-a55.component';

describe('CompA55Component', () => {
  let component: CompA55Component;
  let fixture: ComponentFixture<CompA55Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA55Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
