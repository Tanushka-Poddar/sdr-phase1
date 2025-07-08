import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidhsComponent } from './kidhs.component';

describe('KidhsComponent', () => {
  let component: KidhsComponent;
  let fixture: ComponentFixture<KidhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidhsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
