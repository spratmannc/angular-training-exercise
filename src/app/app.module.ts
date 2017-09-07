import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesnoPipe } from './yesno.pipe';
import { SuccessDirective } from './success.directive';

@NgModule({
  declarations: [
    AppComponent,
    YesnoPipe,
    SuccessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
