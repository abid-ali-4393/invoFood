import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { RegisterService } from "../shared/services/register/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  Roles: string[] = ["Admin", "User"];
  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      userName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      role: new FormControl(),
    });
  }

  register() {
    this.registerService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result.payload);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
