import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidshsComponent } from './kidshs.component';

describe('KidshsComponent', () => {
  let component: KidshsComponent;
  let fixture: ComponentFixture<KidshsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidshsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidshsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
