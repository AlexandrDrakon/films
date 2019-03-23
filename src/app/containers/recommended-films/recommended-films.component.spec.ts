import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedFilmsComponent } from './recommended-films.component';

describe('RecommendedFilmsComponent', () => {
  let component: RecommendedFilmsComponent;
  let fixture: ComponentFixture<RecommendedFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
