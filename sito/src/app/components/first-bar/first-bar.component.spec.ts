import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBarComponent } from './first-bar.component';

describe('FirstBarComponent', () => {
  let component: FirstBarComponent;
  let fixture: ComponentFixture<FirstBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
