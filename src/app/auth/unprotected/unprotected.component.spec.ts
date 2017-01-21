/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnprotectedComponent } from './unprotected.component';

describe('UnprotectedComponent', () => {
  let component: UnprotectedComponent;
  let fixture: ComponentFixture<UnprotectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnprotectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprotectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
