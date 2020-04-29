import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA141Component } from './comp-a141.component';

describe('CompA141Component', () => {
  let component: CompA141Component;
  let fixture: ComponentFixture<CompA141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
