import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActionBarComponent } from './table-action-bar.component';

describe('TableActionBarComponent', () => {
  let component: TableActionBarComponent;
  let fixture: ComponentFixture<TableActionBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableActionBarComponent]
    });
    fixture = TestBed.createComponent(TableActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
