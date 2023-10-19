import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadridMapComponent } from './madrid-map.component';

describe('MadridMapComponent', () => {
  let component: MadridMapComponent;
  let fixture: ComponentFixture<MadridMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadridMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadridMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
