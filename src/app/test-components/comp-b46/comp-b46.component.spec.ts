import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB46Component } from './comp-b46.component';

describe('CompB46Component', () => {
  let component: CompB46Component;
  let fixture: ComponentFixture<CompB46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
