import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importación de paquete de angular formsModule
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
