import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnhsComponent } from './rnhs.component';

describe('RnhsComponent', () => {
  let component: RnhsComponent;
  let fixture: ComponentFixture<RnhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RnhsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RnhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
