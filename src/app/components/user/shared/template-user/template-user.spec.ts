import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUser } from './template-user';

describe('TemplateUser', () => {
  let component: TemplateUser;
  let fixture: ComponentFixture<TemplateUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
