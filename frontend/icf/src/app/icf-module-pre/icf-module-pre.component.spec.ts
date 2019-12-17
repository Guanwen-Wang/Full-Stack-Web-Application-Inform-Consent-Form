import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcfModulePreComponent } from './icf-module-pre.component';

describe('IcfModulePreComponent', () => {
  let component: IcfModulePreComponent;
  let fixture: ComponentFixture<IcfModulePreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcfModulePreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcfModulePreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
