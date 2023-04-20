import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltypeComponent } from './tooltype.component';

describe('TooltypeComponent', () => {
  let component: TooltypeComponent;
  let fixture: ComponentFixture<TooltypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
