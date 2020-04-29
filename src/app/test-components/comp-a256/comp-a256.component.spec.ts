import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA256Component } from './comp-a256.component';

describe('CompA256Component', () => {
  let component: CompA256Component;
  let fixture: ComponentFixture<CompA256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
