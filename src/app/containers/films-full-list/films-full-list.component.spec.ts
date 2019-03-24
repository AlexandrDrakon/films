import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsFullListComponent } from './films-full-list.component';

describe('FilmsFullListComponent', () => {
  let component: FilmsFullListComponent;
  let fixture: ComponentFixture<FilmsFullListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsFullListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsFullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
