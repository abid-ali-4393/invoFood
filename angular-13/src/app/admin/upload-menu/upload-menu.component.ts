import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MenuClientsService } from "../services/menu-clients/menu-clients.service";

@Component({
  selector: "app-upload-menu",
  templateUrl: "./upload-menu.component.html",
  styleUrls: ["./upload-menu.component.scss"],
})
export class UploadMenuComponent implements OnInit {
  uploadMenuForm: FormGroup;
  constructor(private menuClientsService: MenuClientsService) {}

  ngOnInit(): void {
    this.uploadMenuForm = new FormGroup({
      menuTitle: new FormControl("", [Validators.required]),
      menuAttach: new FormControl(),
      fromDate: new FormControl("", [Validators.required]),
      toDate: new FormControl("", [Validators.required]),
    });
  }

  get getControl() {
    // console.log(this.uploadMenuForm.controls[controlName]);
    return this.uploadMenuForm.controls;
  }
  //upload menu
  uploadMenu() {
    // console.log(this.uploadMenuForm.value);

    this.menuClientsService.uploadMenu(this.uploadMenuForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
