import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import {ClientService} from "./services/client.service";

@NgModule({
  declarations: [AppComponent, ClientsComponent,NavbarComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [ClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
