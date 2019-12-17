import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectControlComponent } from './admin-project-control.component';

describe('AdminProjectControlComponent', () => {
  let component: AdminProjectControlComponent;
  let fixture: ComponentFixture<AdminProjectControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
