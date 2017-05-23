/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewjobComponent } from './newjob.component';

describe('NewjobComponent', () => {
  let component: NewjobComponent;
  let fixture: ComponentFixture<NewjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
