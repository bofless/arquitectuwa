import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MecanicohomepagePage } from './mecanicohomepage.page';

describe('MecanicohomepagePage', () => {
  let component: MecanicohomepagePage;
  let fixture: ComponentFixture<MecanicohomepagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicohomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
