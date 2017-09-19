import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesnoPipe } from './yesno.pipe';
import { SuccessDirective } from './success.directive';
import { CelebrityrowComponent } from './celebrityrow/celebrityrow.component';
import { CelebformComponent } from './celebform/celebform.component';

@NgModule({
  declarations: [
    AppComponent,
    YesnoPipe,
    SuccessDirective,
    CelebrityrowComponent,
    CelebformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
