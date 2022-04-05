import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkGabriComponent } from './link-gabri.component';

describe('LinkGabriComponent', () => {
  let component: LinkGabriComponent;
  let fixture: ComponentFixture<LinkGabriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkGabriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkGabriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
