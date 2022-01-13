import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseUrl } from "../../../constants";
@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    // console.log(data);
    return this.http.post(`${baseUrl}/user/register`, data);
  }
}
