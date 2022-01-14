import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseUrl } from "../../../app/constants";

@Injectable({
  providedIn: "root",
})
export class InvoiceService {
  constructor(private http: HttpClient) {}

  uploadInvoice(data: any): Observable<any> {
    let headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    return this.http.post(`${baseUrl}/user/upload-invoice`, data, {
      headers: headers,
    });
  }

  getInvoicesList(): Observable<any> {
    let headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    return this.http.get(`${baseUrl}/user/user-invoices`, { headers: headers });
  }
}
