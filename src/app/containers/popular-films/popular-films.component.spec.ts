import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularFilmsComponent } from './popular-films.component';

describe('PopularFilmsComponent', () => {
  let component: PopularFilmsComponent;
  let fixture: ComponentFixture<PopularFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopularFilmsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
