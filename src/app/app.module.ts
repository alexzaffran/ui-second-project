import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { OtherDataComponent } from './other-data/other-data.component';
import { MainComponent } from './main/main.component';
import { Route } from '@angular/router';

// const appRoutes = (Routes = [{ path: '', Component: UsersListComponent }]);

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserComponent,
    OtherDataComponent,
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
