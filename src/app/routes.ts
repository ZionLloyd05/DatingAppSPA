import { AuthGaurd } from "./_guards/auth.guard";
import { MessagesComponent } from "./messages/messages.component";
import { ListsComponent } from "./lists/lists.component";
import { Routes } from "@angular/router";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGaurd],
    children: [
      { path: "members", component: MemberListComponent },
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: ListsComponent }
    ]
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
