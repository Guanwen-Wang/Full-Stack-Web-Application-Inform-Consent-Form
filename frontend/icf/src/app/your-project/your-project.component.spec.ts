import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProjectComponent } from './your-project.component';

describe('YourProjectComponent', () => {
  let component: YourProjectComponent;
  let fixture: ComponentFixture<YourProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
