import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA19Component } from './comp-a19.component';

describe('CompA19Component', () => {
  let component: CompA19Component;
  let fixture: ComponentFixture<CompA19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
