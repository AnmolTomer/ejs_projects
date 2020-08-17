import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit{
  clients;
  _id;
  first_name;
  last_name;
  email;
  phone;
  isEdit;
  constructor(private clientService: ClientService){
  
  }

 ngOnInit(){
   this.clientService.getClients().subscribe(clients => {
     this.clients = clients;
   });

   this.isEdit = false;
 }

 onAddSubmit(){
   let newClient = {
     first_name: this.first_name,
     last_name: this.last_name,
     email: this.email,
     phone: this.phone
   }

   this.clientService.saveClient(newClient).subscribe(client => {
     this.clients.push(client);
     this.first_name = '';
     this.last_name = '';
     this.email = '';
     this.phone = '';
   });
 }

 onEditSubmit(){
   let updClient = {
     first_name: this.first_name,
     last_name: this.last_name,
     email: this.email,
     phone: this.phone,
     _id: this._id
   }

   this.clientService.updateClient(updClient).subscribe(client => {
     for(let i = 0; i < this.clients.length;i++){
       if(client._id == this.clients[i]._id){
         this.clients.splice(i, 1);
       }
     }
     this.clients.push(client);
     this.first_name = '';
     this.last_name = '';
     this.email = '';
     this.phone = '';
   });
 }

 onEditClick(client){
   this.isEdit = true;
   this.first_name = client.first_name;
   this.last_name = client.last_name;
   this.email = client.email;
   this.phone = client.phone;
   this._id = client._id;
 }
}
