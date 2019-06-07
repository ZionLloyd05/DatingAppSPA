import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guard";
import { MemberEditResolver } from "./_resolvers/member-edit.resolver";
import { MemberEditComponent } from "./members/member-edit/member-edit.component";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
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
      {
        path: "members/:id",
        component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver }
      },
      {
        path: "member/edit",
        component: MemberEditComponent,
        resolve: { user: MemberEditResolver },
        canDeactivate: [PreventUnsavedChanges]
      },
      { path: "messages", component: MessagesComponent },
      { path: "lists", component: ListsComponent }
    ]
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
