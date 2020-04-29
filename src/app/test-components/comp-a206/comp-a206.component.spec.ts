import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA206Component } from './comp-a206.component';

describe('CompA206Component', () => {
  let component: CompA206Component;
  let fixture: ComponentFixture<CompA206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
