import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA251Component } from './comp-a251.component';

describe('CompA251Component', () => {
  let component: CompA251Component;
  let fixture: ComponentFixture<CompA251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
