import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VchsComponent } from './vchs.component';

describe('VchsComponent', () => {
  let component: VchsComponent;
  let fixture: ComponentFixture<VchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VchsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
