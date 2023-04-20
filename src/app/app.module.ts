import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomToolTipDirective } from './custom-tool-tip.directive';
import { TooltypeComponent } from './tooltype/tooltype.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomToolTipDirective,
    TooltypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
