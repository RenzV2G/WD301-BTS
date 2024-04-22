import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeComponent } from './compose.component';

describe('ComposeComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ComposeComponent]
  }));
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(ComposeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it(`should have as title 'entryapp'`, () => {
    const fixture = TestBed.createComponent(ComposeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('entryapp');
  });
  
  it('should render title', () => {
    const fixture = TestBed.createComponent(ComposeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('entryapp app is running!');
  });
});

