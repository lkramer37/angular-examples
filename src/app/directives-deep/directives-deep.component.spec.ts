import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDeepComponent } from './directives-deep.component';

describe('DirectivesDeepComponent', () => {
  let component: DirectivesDeepComponent;
  let fixture: ComponentFixture<DirectivesDeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesDeepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
