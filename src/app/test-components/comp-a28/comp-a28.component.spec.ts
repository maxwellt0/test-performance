import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA28Component } from './comp-a28.component';

describe('CompA28Component', () => {
  let component: CompA28Component;
  let fixture: ComponentFixture<CompA28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
