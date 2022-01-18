import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassPracticeComponent } from './sass-practice.component';

describe('SassPracticeComponent', () => {
  let component: SassPracticeComponent;
  let fixture: ComponentFixture<SassPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SassPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SassPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
