import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLegoOneComponent } from './single-lego-one.component';

describe('SingleLegoOneComponent', () => {
  let component: SingleLegoOneComponent;
  let fixture: ComponentFixture<SingleLegoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLegoOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLegoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
