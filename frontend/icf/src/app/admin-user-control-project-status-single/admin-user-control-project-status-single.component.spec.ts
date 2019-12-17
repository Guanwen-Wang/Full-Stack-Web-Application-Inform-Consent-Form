import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserControlProjectStatusSingleComponent } from './admin-user-control-project-status-single.component';

describe('AdminUserControlProjectStatusSingleComponent', () => {
  let component: AdminUserControlProjectStatusSingleComponent;
  let fixture: ComponentFixture<AdminUserControlProjectStatusSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserControlProjectStatusSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserControlProjectStatusSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
