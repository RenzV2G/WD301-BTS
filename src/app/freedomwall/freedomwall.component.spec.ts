import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreedomwallComponent } from './freedomwall.component';

describe('FreedomwallComponent', () => {
  let component: FreedomwallComponent;
  let fixture: ComponentFixture<FreedomwallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreedomwallComponent]
    });
    fixture = TestBed.createComponent(FreedomwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
