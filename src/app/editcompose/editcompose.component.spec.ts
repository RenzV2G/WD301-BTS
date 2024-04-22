import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcomposeComponent } from './editcompose.component';

describe('EditcomposeComponent', () => {
  let component: EditcomposeComponent;
  let fixture: ComponentFixture<EditcomposeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcomposeComponent]
    });
    fixture = TestBed.createComponent(EditcomposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
