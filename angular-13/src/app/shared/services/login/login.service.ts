import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseUrl } from "../../../constants";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/user/login`, data);
  }
}
