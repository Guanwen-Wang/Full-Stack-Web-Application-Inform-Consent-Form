import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduModuleComponent } from './edu-module.component';

describe('EduModuleComponent', () => {
  let component: EduModuleComponent;
  let fixture: ComponentFixture<EduModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
