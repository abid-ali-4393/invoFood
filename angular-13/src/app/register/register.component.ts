import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RegisterService } from "../shared/services/register/register.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  Roles: string[] = ["Admin", "User"];
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      role: new FormControl("", [Validators.required]),
    });
  }

  get getControls() {
    return this.registerForm.controls;
  }
  register() {
    this.registerService.register(this.registerForm.value).subscribe(
      (result) => {
        // console.log(result.message);

        this.router.navigate(["/login"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
