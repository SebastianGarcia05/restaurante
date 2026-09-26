import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cobros } from './cobros.component';

describe('Cobros', () => {
  let component: Cobros;
  let fixture: ComponentFixture<Cobros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cobros],
    }).compileComponents();

    fixture = TestBed.createComponent(Cobros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
