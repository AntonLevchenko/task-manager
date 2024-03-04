import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTasksFoundComponent } from './no-tasks-found.component';

describe('NoTasksFoundComponent', () => {
  let component: NoTasksFoundComponent;
  let fixture: ComponentFixture<NoTasksFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoTasksFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoTasksFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
