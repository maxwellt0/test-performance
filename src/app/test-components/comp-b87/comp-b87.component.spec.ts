import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB87Component } from './comp-b87.component';

describe('CompB87Component', () => {
  let component: CompB87Component;
  let fixture: ComponentFixture<CompB87Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB87Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
