import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {ResumeComponent} from "./resume/resume.component";
import {ServicesComponent} from "./services/services.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {BlogComponent} from "./blog/blog.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
    {
        path: "index",
        component: IndexComponent
    },
    {
        path: "resume",
        component: ResumeComponent
    },
    {
        path: "services",
        component: ServicesComponent
    },
    {
        path: "portfolio",
        component: PortfolioComponent
    },
    {
        path: "blog",
        component: BlogComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: '**',
        redirectTo: 'index'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
