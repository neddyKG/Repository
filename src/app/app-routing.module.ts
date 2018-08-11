import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'repositories', component: RepositoriesComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

