import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA136Component } from './comp-a136.component';

describe('CompA136Component', () => {
  let component: CompA136Component;
  let fixture: ComponentFixture<CompA136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
