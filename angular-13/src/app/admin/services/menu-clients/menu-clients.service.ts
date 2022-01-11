import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = `http://localhost:300`;
@Injectable({
  providedIn: "root",
})
export class MenuClientsService {
  constructor(private http: HttpClient) {}

  getClientsList(): Observable<any> {
    return this.http.get(baseUrl);
  }
  uploadMenu(menu: unknown): Observable<any> {
    return this.http.post(baseUrl, menu);
  }
}
