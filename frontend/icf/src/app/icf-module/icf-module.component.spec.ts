import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcfModuleComponent } from './icf-module.component';

describe('IcfModuleComponent', () => {
  let component: IcfModuleComponent;
  let fixture: ComponentFixture<IcfModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcfModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcfModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
