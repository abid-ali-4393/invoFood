import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FullComponent } from "./layouts/full/full.component";

import { NavigationComponent } from "./shared/header/navigation.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";

// import { Approutes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SpinnerComponent } from "./shared/spinner.component";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { UploadMenuComponent } from "./admin/upload-menu/upload-menu.component";
import { MaterialModule } from "./material/material.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ClientsListingComponent } from "./admin/clients-listing/clients-listing.component";
import { UploadInvoiceComponent } from "./client/upload-invoice/upload-invoice.component";
import { InvoiceListingComponent } from "./client/invoice-listing/invoice-listing.component";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20,
};

const Approutes: Routes = [
  { path: "upload-menu", component: UploadMenuComponent, pathMatch: "full" },
  {
    path: "upload-invoice",
    component: UploadInvoiceComponent,
    pathMatch: "full",
  },
  {
    path: "client-list",
    component: ClientsListingComponent,
    pathMatch: "full",
  },
  {
    path: "invoice-list",
    component: InvoiceListingComponent,
    pathMatch: "full",
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    UploadMenuComponent,
    LoginComponent,
    RegisterComponent,
    ClientsListingComponent,
    UploadInvoiceComponent,
    InvoiceListingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, {
      useHash: false,
      relativeLinkResolution: "legacy",
    }),
    PerfectScrollbarModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
