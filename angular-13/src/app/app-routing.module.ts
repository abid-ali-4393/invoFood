import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { UploadMenuComponent } from "./admin/upload-menu/upload-menu.component";

export const Approutes: Routes = [
  {
    path: "",
    component: FullComponent,
    pathMatch: "full",
    children: [
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
    ],
  },

  { path: "upload-menu", component: UploadMenuComponent, pathMatch: "full" },
];
