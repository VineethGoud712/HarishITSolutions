import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectListComponent } from './reject-list.component';

describe('RejectListComponent', () => {
  let component: RejectListComponent;
  let fixture: ComponentFixture<RejectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
