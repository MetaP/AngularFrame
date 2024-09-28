import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OusiaComponent } from './ousia.component';

describe('OusiaComponent', () => {
  let component: OusiaComponent;
  let fixture: ComponentFixture<OusiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OusiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OusiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
