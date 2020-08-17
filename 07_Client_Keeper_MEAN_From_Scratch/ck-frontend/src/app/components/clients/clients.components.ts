import { Component, OnInit } from "@angular/core";
import {ClientService} from "../../services/client.service";

@Component({
  // Decorator
  selector: "clients", // Selector
  templateUrl: "./clients.component.html",
})
export class ClientsComponent implements OnInit{
  title = "app works!";
  clients // Clients as a property specified. Allows access to this.clients from our template clients.components.html.
  constructor(private clientService: ClientService) {

  }
  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      // console.log(clients)
      this.clients = clients;
    }); // Similar to catching promise from .then()
  }
}
