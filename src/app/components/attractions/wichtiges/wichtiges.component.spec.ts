import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WichtigesComponent } from './wichtiges.component';

describe('WichtigesComponent', () => {
  let component: WichtigesComponent;
  let fixture: ComponentFixture<WichtigesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WichtigesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WichtigesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
