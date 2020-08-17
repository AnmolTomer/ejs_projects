import {Injectable} from '@angular/core'; // Inject service as dependency into our components.
import {Http, Headers} from '@angular/http'; // Http module with headers
import 'rxjs/add/operator/map'; // Reactive extensions map so that we can map our request back as an observable which is like a stream of data.

@Injectable()
// inject into constructor http module
export class ClientService{
    constructor(private http: Http){

    }
// Function to make get requests to our backend API
    getClients(){
        return this.http.get('http://localhost:3000/api/clients')
            .map(res => res.json());
    }

    saveClient(client){
        let headers = new Headers(); //  HTTP module to do a post request
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/clients', client, {headers: headers})
            .map(res => res.json());
    }

    updateClient(client){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/clients/'+client._id, client, {headers: headers})
            .map(res => res.json());
    }
}
