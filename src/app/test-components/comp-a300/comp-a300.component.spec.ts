import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA300Component } from './comp-a300.component';

describe('CompA300Component', () => {
  let component: CompA300Component;
  let fixture: ComponentFixture<CompA300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
