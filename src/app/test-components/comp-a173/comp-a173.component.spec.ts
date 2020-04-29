import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA173Component } from './comp-a173.component';

describe('CompA173Component', () => {
  let component: CompA173Component;
  let fixture: ComponentFixture<CompA173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
