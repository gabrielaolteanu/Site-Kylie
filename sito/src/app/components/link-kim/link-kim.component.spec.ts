import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkKimComponent } from './link-kim.component';

describe('LinkKimComponent', () => {
  let component: LinkKimComponent;
  let fixture: ComponentFixture<LinkKimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkKimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkKimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
