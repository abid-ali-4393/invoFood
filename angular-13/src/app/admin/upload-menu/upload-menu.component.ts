import { Component, OnInit } from "@angular/core";
import { MenuClientsService } from "../services/menu-clients/menu-clients.service";

@Component({
  selector: "app-upload-menu",
  templateUrl: "./upload-menu.component.html",
  styleUrls: ["./upload-menu.component.scss"],
})
export class UploadMenuComponent implements OnInit {
  constructor(private menuClientsService: MenuClientsService) {}

  ngOnInit(): void {}

  //upload menu
  uploadMenu(data: unknown) {
    this.menuClientsService.uploadMenu(data);
  }
}
