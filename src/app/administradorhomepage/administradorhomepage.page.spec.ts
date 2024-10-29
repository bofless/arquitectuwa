import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministradorhomepagePage } from './administradorhomepage.page';

describe('AdministradorhomepagePage', () => {
  let component: AdministradorhomepagePage;
  let fixture: ComponentFixture<AdministradorhomepagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorhomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
