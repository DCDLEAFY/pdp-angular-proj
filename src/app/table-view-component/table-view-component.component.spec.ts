import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewComponentComponent } from './table-view-component.component';

describe('TableViewComponentComponent', () => {
  let component: TableViewComponentComponent;
  let fixture: ComponentFixture<TableViewComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableViewComponentComponent]
    });
    fixture = TestBed.createComponent(TableViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
