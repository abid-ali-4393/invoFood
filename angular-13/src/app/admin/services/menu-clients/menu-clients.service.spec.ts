import { TestBed } from '@angular/core/testing';

import { MenuClientsService } from './menu-clients.service';

describe('MenuClientsService', () => {
  let service: MenuClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
