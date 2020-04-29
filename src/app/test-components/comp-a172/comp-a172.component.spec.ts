import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA172Component } from './comp-a172.component';

describe('CompA172Component', () => {
  let component: CompA172Component;
  let fixture: ComponentFixture<CompA172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
