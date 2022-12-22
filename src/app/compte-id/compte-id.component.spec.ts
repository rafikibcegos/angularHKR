import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteIdComponent } from './compte-id.component';

describe('CompteIdComponent', () => {
  let component: CompteIdComponent;
  let fixture: ComponentFixture<CompteIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
