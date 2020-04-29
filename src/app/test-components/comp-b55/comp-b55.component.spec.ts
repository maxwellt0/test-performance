import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompB55Component } from './comp-b55.component';

describe('CompB55Component', () => {
  let component: CompB55Component;
  let fixture: ComponentFixture<CompB55Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompB55Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompB55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
