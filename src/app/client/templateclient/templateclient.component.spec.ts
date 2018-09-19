import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateclientComponent } from './templateclient.component';

describe('TemplateclientComponent', () => {
  let component: TemplateclientComponent;
  let fixture: ComponentFixture<TemplateclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
