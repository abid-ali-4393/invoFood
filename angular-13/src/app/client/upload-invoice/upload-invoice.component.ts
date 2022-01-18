import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
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
      invoiceTitle: new FormControl("", [Validators.required]),
      invoiceAttach: new FormControl(),
      invoiceFromDate: new FormControl("", [Validators.required]),
      invoiceToDate: new FormControl("", [Validators.required]),
      invoiceAmount: new FormControl("", [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }

  get getControls() {
    return this.uploadInvoiceForm.controls;
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
