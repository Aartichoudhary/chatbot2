import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatModule } from './chat/chat.module';
import { AppComponent } from './app.component';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    ChatDialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule ,
    FormsModule,
    DialogsModule,
    BrowserAnimationsModule,
    ButtonsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
