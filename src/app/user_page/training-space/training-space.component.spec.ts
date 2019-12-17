import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSpaceComponent } from './training-space.component';

describe('TrainingSpaceComponent', () => {
  let component: TrainingSpaceComponent;
  let fixture: ComponentFixture<TrainingSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
