import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA22Component } from './comp-a22.component';

describe('CompA22Component', () => {
  let component: CompA22Component;
  let fixture: ComponentFixture<CompA22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompA22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
