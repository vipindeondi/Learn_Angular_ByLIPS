import { TestBed, async, inject } from '@angular/core/testing';

import { TodosGuard } from './todos.guard';

describe('TodosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosGuard]
    });
  });

  it('should ...', inject([TodosGuard], (guard: TodosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
