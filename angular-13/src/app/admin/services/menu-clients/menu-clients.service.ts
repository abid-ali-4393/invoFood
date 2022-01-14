import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseUrl } from "../../../constants";
@Injectable({
  providedIn: "root",
})
export class MenuClientsService {
  constructor(private http: HttpClient) {}

  getClientsList(): Observable<any> {
    let headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    return this.http.get(`${baseUrl}/admin/subsucribed-users`, {
      headers: headers,
    });
  }

  uploadMenu(menu: unknown): Observable<any> {
    let headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    return this.http.post(`${baseUrl}/admin/upload-menu`, menu, {
      headers: headers,
    });
  }
}
