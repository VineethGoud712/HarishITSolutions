import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppiledUsersComponent } from './appiled-users.component';

describe('AppiledUsersComponent', () => {
  let component: AppiledUsersComponent;
  let fixture: ComponentFixture<AppiledUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppiledUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppiledUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
