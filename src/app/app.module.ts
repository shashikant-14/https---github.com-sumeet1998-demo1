import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeComponent } from './home/home.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { SignoutComponent } from './signout/signout.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NopagefoundComponent,
    HomeComponent,
    NameEditorComponent,
    SignoutComponent,
    ForgotpassComponent,
    ResetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
