import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDataContainerComponent } from './loading-data-container.component';

describe('LoadingDataContainerComponent', () => {
  let component: LoadingDataContainerComponent;
  let fixture: ComponentFixture<LoadingDataContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingDataContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
