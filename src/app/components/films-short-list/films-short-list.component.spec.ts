import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsShortListComponent } from './films-short-list.component';

describe('FilmsShortListComponent', () => {
  let component: FilmsShortListComponent;
  let fixture: ComponentFixture<FilmsShortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsShortListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsShortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
