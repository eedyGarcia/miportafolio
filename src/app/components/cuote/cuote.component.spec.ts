import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuoteComponent } from './cuote.component';

describe('CuoteComponent', () => {
  let component: CuoteComponent;
  let fixture: ComponentFixture<CuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
