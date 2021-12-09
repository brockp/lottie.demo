import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanizsaTriangleComponent } from './kanizsa-triangle.component';

describe('KanizsaTriangleComponent', () => {
  let component: KanizsaTriangleComponent;
  let fixture: ComponentFixture<KanizsaTriangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanizsaTriangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanizsaTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
