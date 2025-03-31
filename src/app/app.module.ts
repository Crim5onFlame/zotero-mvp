import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ZoteroService } from './services/zotero.service';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ZoteroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
