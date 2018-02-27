import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { SharedService } from './shared.service'
import { AppComponent } from './app.component';

const appRoutes: Routes= [
  { path:'login', component:LoginComponent },
  { path:'chat', component:ChatComponent },
  { path:'', redirectTo:'login', pathMatch:'full'}
];
@NgModule({
  declarations: [
    LoginComponent,
    ChatComponent,
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
