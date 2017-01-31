import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';

import { WebSocketService } from './services/websocket.service';

import { AppComponent }  from './app.component';
import { ClientFormComponent } from './client-form.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    ],
  declarations: [ 
    AppComponent,
    ClientFormComponent
    ],
  providers: [
    WebSocketService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
