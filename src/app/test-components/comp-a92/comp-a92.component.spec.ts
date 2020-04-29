import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA92Component } from './comp-a92.component';

describe('CompA92Component', () => {
  let component: CompA92Component;
  let fixture: ComponentFixture<CompA92Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA92Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
