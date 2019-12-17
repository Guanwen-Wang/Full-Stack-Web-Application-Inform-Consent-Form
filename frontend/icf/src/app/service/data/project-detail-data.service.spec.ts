import { TestBed } from '@angular/core/testing';

import { ProjectDetailDataService } from './project-detail-data.service';

describe('ProjectDetailDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectDetailDataService = TestBed.get(ProjectDetailDataService);
    expect(service).toBeTruthy();
  });
});
