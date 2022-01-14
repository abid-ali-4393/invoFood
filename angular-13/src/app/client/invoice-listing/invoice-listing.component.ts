import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { InvoiceService } from "../services/invoice.service";

@Component({
  selector: "app-invoice-listing",
  templateUrl: "./invoice-listing.component.html",
  styleUrls: ["./invoice-listing.component.scss"],
})
export class InvoiceListingComponent implements OnInit {
  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.getAllInvoices();
  }

  displayedColumns: string[] = [
    "invoice_title",
    "invoice_amount",
    "invoice_from_date",
    "invoice_to_date",
  ];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  getAllInvoices() {
    this.invoiceService.getInvoicesList().subscribe(
      (result) => {
        // ELEMENT_DATA = result.payload;
        this.dataSource = new MatTableDataSource<PeriodicElement>(
          result.payload
        );

        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}

export interface PeriodicElement {
  invoice_title: string;
  invoice_amount: number;
  invoice_from_date: Date;
  invoice_to_date: Date;
}

// let ELEMENT_DATA: PeriodicElement[];
