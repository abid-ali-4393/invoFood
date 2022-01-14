import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { UploadMenuComponent } from "./admin/upload-menu/upload-menu.component";

export const Approutes: Routes = [
  { path: "upload-menu", component: UploadMenuComponent, pathMatch: "full" },
];
