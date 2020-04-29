import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA159Component } from './comp-a159.component';

describe('CompA159Component', () => {
  let component: CompA159Component;
  let fixture: ComponentFixture<CompA159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
