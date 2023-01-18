import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBookViewComponent } from './open-book-view.component';

describe('OpenBookViewComponent', () => {
  let component: OpenBookViewComponent;
  let fixture: ComponentFixture<OpenBookViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenBookViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
