import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
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
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  login() {
    //console.log(this.loginForm.value);

    this.loginService.loginUser(this.loginForm.value).subscribe(
      (result) => {
        console.log(result);
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
