import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUsersFoundComponent } from './no-users-found.component';

describe('NoUsersFoundComponent', () => {
  let component: NoUsersFoundComponent;
  let fixture: ComponentFixture<NoUsersFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoUsersFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoUsersFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
