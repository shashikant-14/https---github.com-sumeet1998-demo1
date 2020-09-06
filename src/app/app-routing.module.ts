import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeComponent } from './home/home.component';
import { SignoutComponent } from './signout/signout.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'signout',component:SignoutComponent},
  {path:'named',component:NameEditorComponent},
  {path:'forgotpass',component:ForgotpassComponent,children:[{path:'resetpassword',component:ResetpasswordComponent},],},
  {path:'',redirectTo:'/signin',pathMatch:'full'},
  {path:'**',component:NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
