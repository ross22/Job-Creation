/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobdescComponent } from './jobdesc.component';

describe('JobdescComponent', () => {
  let component: JobdescComponent;
  let fixture: ComponentFixture<JobdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
