import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UfoodComponent } from './ufood.component';

describe('UfoodComponent', () => {
  let component: UfoodComponent;
  let fixture: ComponentFixture<UfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
