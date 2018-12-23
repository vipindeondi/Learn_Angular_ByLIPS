import { TestBed, async, inject } from '@angular/core/testing';

import { PostAddGuard } from './post-add.guard';

describe('PostAddGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostAddGuard]
    });
  });

  it('should ...', inject([PostAddGuard], (guard: PostAddGuard) => {
    expect(guard).toBeTruthy();
  }));
});
