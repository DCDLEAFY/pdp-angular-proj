import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableViewComponentComponent } from './table-view-component/table-view-component.component';
import { TableActionBarComponent } from './table-action-bar/table-action-bar.component';
import { GameNavbarComponent } from './game-navbar/game-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponentComponent,
    TableActionBarComponent,
    GameNavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
