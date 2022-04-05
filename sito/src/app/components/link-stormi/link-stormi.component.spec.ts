import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkStormiComponent } from './link-stormi.component';

describe('LinkStormiComponent', () => {
  let component: LinkStormiComponent;
  let fixture: ComponentFixture<LinkStormiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkStormiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkStormiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
