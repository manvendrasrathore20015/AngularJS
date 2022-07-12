import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingCliComponent } from './using-cli.component';

describe('UsingCliComponent', () => {
  let component: UsingCliComponent;
  let fixture: ComponentFixture<UsingCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
