import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { AboutUsCompanyComponent } from './about-us-company/about-us-company.component';
import { AboutUsOrganizationComponent } from './about-us-organization/about-us-organization.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent,
        children:[
            {path:'company',component:AboutUsCompanyComponent},
            {path:'organization',component:AboutUsOrganizationComponent}
        ]
    },
    {path:'contact-us',component:ContactComponent},
    {path:'post/:id',component:PostComponent},
    {path:"**",component:NotFoundComponent}
];
