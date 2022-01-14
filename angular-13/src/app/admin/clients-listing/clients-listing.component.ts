import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MenuClientsService } from "../services/menu-clients/menu-clients.service";

@Component({
  selector: "app-clients-listing",
  templateUrl: "./clients-listing.component.html",
  styleUrls: ["./clients-listing.component.scss"],
})
export class ClientsListingComponent implements OnInit {
  constructor(private menuClientsService: MenuClientsService) {}

  ngOnInit(): void {
    this.getAllClients();
  }

  displayedColumns: string[] = ["name", "email", "role"];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  getAllClients() {
    this.menuClientsService.getClientsList().subscribe(
      (result) => {
        this.dataSource = new MatTableDataSource(result.payload);

        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}

export interface PeriodicElement {
  name: string;
  email: string;
  role: string;
}
