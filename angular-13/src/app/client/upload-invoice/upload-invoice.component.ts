import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { InvoiceService } from "../services/invoice.service";

@Component({
  selector: "app-upload-invoice",
  templateUrl: "./upload-invoice.component.html",
  styleUrls: ["./upload-invoice.component.scss"],
})
export class UploadInvoiceComponent implements OnInit {
  uploadInvoiceForm: FormGroup;
  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.uploadInvoiceForm = new FormGroup({
      invoiceTitle: new FormControl(),
      invoiceAttach: new FormControl(),
      invoiceFromDate: new FormControl(),
      invoiceToDate: new FormControl(),
      invoiceAmount: new FormControl(),
    });
  }

  uploadInvoice() {
    // console.log(this.uploadInvoiceForm.value);
    let data: object;
    data = {
      title: this.uploadInvoiceForm.value.invoiceTitle,
      fromDate: this.uploadInvoiceForm.value.invoiceFromDate,
      toDate: this.uploadInvoiceForm.value.invoiceToDate,
      amount: this.uploadInvoiceForm.value.invoiceAmount,
    };

    this.invoiceService.uploadInvoice(data).subscribe(
      (result) => {
        console.log(result.payload);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
