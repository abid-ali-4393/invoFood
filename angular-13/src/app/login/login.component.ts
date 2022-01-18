import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../shared/services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private loginService: LoginService, private router: Router) {}

  logedIn: boolean = false;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get getControls() {
    return this.loginForm.controls;
  }
  login() {
    //console.log(this.loginForm.value);

    this.loginService.loginUser(this.loginForm.value).subscribe(
      (result) => {
        console.log(result.message);
        let role = result.payload.role;
        localStorage.setItem("token", result.payload.token);

        this.router.navigate(["/admin/upload-menu"]);

        // if (role === "user") {
        //   this.router.navigate(["'/dashboard'"]);
        // }

        this.logedIn = true;
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
