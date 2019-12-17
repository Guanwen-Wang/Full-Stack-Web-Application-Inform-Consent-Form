import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachModuleComponent } from './teach-module.component';

describe('TeachModuleComponent', () => {
  let component: TeachModuleComponent;
  let fixture: ComponentFixture<TeachModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
