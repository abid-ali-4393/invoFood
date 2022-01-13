import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseUrl } from "../../../app/constants";

@Injectable({
  providedIn: "root",
})
export class InvoiceService {
  constructor(private http: HttpClient) {}

  uploadInvoice(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/user/upload-invoice`, data);
  }

  getInvoicesList(): Observable<any> {
    return this.http.get(`${baseUrl}/user/user-invoices`);
  }
}
