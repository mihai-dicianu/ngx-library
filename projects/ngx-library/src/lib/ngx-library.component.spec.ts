import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLibraryComponent } from './ngx-library.component';

describe('NgxLibraryComponent', () => {
  let component: NgxLibraryComponent;
  let fixture: ComponentFixture<NgxLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxLibraryComponent]
    });
    fixture = TestBed.createComponent(NgxLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
