import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { WebSocketService } from './services/websocket.service';

import { AppComponent }  from './app.component';
import { CasterFormComponent } from './caster-form.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule
    ],
  declarations: [ 
    AppComponent,
    CasterFormComponent,
    WebSocketService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
