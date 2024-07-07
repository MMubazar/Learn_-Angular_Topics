import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleComponentsComponent } from './life-cycle-components.component';

describe('LifeCycleComponentsComponent', () => {
  let component: LifeCycleComponentsComponent;
  let fixture: ComponentFixture<LifeCycleComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeCycleComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCycleComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
