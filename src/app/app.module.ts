import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from "src/components/auth/login/login.component";
import { RegisterComponent } from "src/components/auth/register/register.component";
import { DashboardComponent } from "src/components/dashboard/dashboard.component";
import { FooterComponent } from "src/shared/footer/footer.component";
import { NavbarComponent } from "src/shared/navbar/navbar.component";
import { SidebarComponent } from "src/shared/sidebar/sidebar.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
