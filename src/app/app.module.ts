import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableViewComponentComponent } from './table-view-component/table-view-component.component';
import { TableActionBarComponent } from './table-action-bar/table-action-bar.component';
import { GameNavbarComponent } from './game-navbar/game-navbar.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { FormsModule } from '@angular/forms';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponentComponent,
    TableActionBarComponent,
    GameNavbarComponent,
    ModalContentComponent,
    ModalDeleteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
