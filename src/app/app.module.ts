import { MyPipe } from './my-pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllTestsComponent } from './all-tests/all-tests.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTestsComponent,
    MyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
