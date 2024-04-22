import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FreedomwallComponent } from './freedomwall/freedomwall.component';
import { ComposeComponent } from './compose/compose.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { EditcomposeComponent } from './editcompose/editcompose.component';
import { FormsModule } from '@angular/forms';
// import { HttpclientService } from './httpclient.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FreedomwallComponent,
    ComposeComponent,
    EditcomposeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule, 
    MatButtonModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
