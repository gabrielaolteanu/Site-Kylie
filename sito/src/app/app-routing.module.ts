import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LinkKimComponent } from "./components/link-kim/link-kim.component";
import { LinkStormiComponent } from "./components/link-stormi/link-stormi.component";
import { HomeComponent } from "./components-home/home/home.component";
import { LinkGabriComponent } from "./components/link-gabri/link-gabri.component";

const routes: Routes = [
    {
        path: "link-kim", component: LinkKimComponent

    },
    {
        path: "link-stormi", component: LinkStormiComponent

    },
    {
        path: "home", component: HomeComponent
    },
    {
        path: "link-gabri", component: LinkGabriComponent
    }
]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})



export class AppRoutingModule {

}