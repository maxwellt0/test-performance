import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB221Component } from './comp-b221.component';

describe('CompB221Component', () => {
  let component: CompB221Component;
  let fixture: ComponentFixture<CompB221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
