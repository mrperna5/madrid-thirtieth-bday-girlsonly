import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadridMetroComponent } from './madrid-metro.component';

describe('MadridMetroComponent', () => {
  let component: MadridMetroComponent;
  let fixture: ComponentFixture<MadridMetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MadridMetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadridMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
