import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectControlSingleComponent } from './admin-project-control-single.component';

describe('AdminProjectControlSingleComponent', () => {
  let component: AdminProjectControlSingleComponent;
  let fixture: ComponentFixture<AdminProjectControlSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectControlSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectControlSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
