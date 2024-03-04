import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedUserComponent } from './assigned-user.component';

describe('AssignedUserComponent', () => {
  let component: AssignedUserComponent;
  let fixture: ComponentFixture<AssignedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignedUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
