import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }

  getAllData()
  {
    return this.http.get("http://localhost:3000/users");
  }

  postData(val : any)
  {
    return this.http.post(" http://localhost:3000/newUser", val).pipe(map(result => {return result}))
  }

  cred(obj : any)
  {
    return this.http.post("http://localhost:3000/loginCred", obj).pipe(map(result => {return result}))
  }

}
