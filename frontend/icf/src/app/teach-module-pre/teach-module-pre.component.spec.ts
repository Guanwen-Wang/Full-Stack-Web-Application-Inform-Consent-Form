import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachModulePreComponent } from './teach-module-pre.component';

describe('TeachModulePreComponent', () => {
  let component: TeachModulePreComponent;
  let fixture: ComponentFixture<TeachModulePreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachModulePreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachModulePreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
