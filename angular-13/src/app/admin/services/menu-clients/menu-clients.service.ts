import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseUrl } from "../../../constants";
@Injectable({
  providedIn: "root",
})
export class MenuClientsService {
  constructor(private http: HttpClient) {}

  getClientsList(): Observable<any> {
    return this.http.get(`${baseUrl}/admin/subsucribed-users`);
  }

  uploadMenu(menu: unknown): Observable<any> {
    return this.http.post(`${baseUrl}/admin/upload-menu`, menu);
  }
}
