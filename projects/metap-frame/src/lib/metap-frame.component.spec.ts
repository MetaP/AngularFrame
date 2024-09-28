import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaPFrameComponent } from './metap-frame.component';

describe('MetaPFrameComponent', () => {
  let component: MetaPFrameComponent;
  let fixture: ComponentFixture<MetaPFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaPFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaPFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
