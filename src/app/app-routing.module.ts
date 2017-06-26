import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { AboutComponent } from './sections/about/about.component';
import { BlogComponent } from './sections/blog/blog.component';
import { ContactComponent } from './sections/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/portfolio', pathMatch: 'full'},
  {path: 'portfolio', pathMatch: 'full', component: PortfolioComponent },
  {path: 'about', pathMatch: 'full', component: AboutComponent },
  {path: 'blog', pathMatch: 'full', component: BlogComponent },
  {path: 'contact', pathMatch: 'full', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}