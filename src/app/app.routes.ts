import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Contacto } from './contacto/contacto';
import { AboutUs } from './about-us/about-us';
import { Faq } from './faq/faq';
import { Servicios } from './servicios/servicios';
import { Portafolio } from './portafolio/portafolio';
import { Page404 } from './error-pages/page-404/page-404';

export const routes: Routes = [
    {path: '', component: LandingPage},
    {path: 'inicio', component: LandingPage},
    {path: 'contacto', component: Contacto},
    {path: 'sobre-nosotros', component: AboutUs},
    {path: 'faq', component: Faq},
    {path: 'servicios', component: Servicios},
    {path: 'portafolio', component: Portafolio},

    
    {path:'**', component: Page404}
];
