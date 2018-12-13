import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistComponentComponent } from './booklist-component.component';

describe('BooklistComponentComponent', () => {
  let component: BooklistComponentComponent;
  let fixture: ComponentFixture<BooklistComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
