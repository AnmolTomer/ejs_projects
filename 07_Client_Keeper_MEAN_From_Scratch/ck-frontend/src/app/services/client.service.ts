import { Injectable} from "@angular/core"; // Inject service as dependency into our components.
import { Http, Headers } from "@angular/http"; // Http module with headers
import "rxjs/add/operator/map"; // Reactive extensions map so that we can map our request back as an observable which is like a stream of data.

@Injectable()
export class ClientService {
  // inject into constructor http module
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  // Function to make get requests to our backend API
  getClients() {
    return this.http
      .get("http://localhost:3000/api/clients")
      .map((res) => res.json()); // Returns an observable to our component when we call the function.
  }
}
