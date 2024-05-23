import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UallfoodComponent } from './uallfood.component';

describe('UallfoodComponent', () => {
  let component: UallfoodComponent;
  let fixture: ComponentFixture<UallfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UallfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UallfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
