import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: "AIzaSyBWJwaCHv7YY2o0b-J0oDxBmO0QxZA7z9g",
  authDomain: "sofkachat-team-6befe.firebaseapp.com",
  projectId: "sofkachat-team-6befe",
  storageBucket: "sofkachat-team-6befe.appspot.com",
  messagingSenderId: "904436883533",
  appId: "1:904436883533:web:9bc7f8d057db8e95a37c04"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
